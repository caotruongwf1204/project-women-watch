"use client";

import React, { useState } from "react";
import FromCheckout from "../component/checkout/from-checkout";
import "@/app/css/checkout.css";
import CheckoutProducts from "../component/checkout/checkout-products";
import { useDispatch } from "react-redux";
import { cartActions } from "@/app/lib/features/cart.slide";
import { useRouter } from "next/navigation";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";

interface FormData {
  email: string;
  password: string;
  name: string;
  number: string;
  order: number;
  address: string;
}



interface CartItem {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
}

interface RootState {
  user: FormData;
}

export default function Checkout() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isFormValid, setIsFormValid] = useState(false);

  const removeCart = () => {
    dispatch(cartActions.clearCart());
    router.push("/");
  };

  const userData = useSelector((state: RootState) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, // Access form validity
  } = useForm<FormData>({
    mode: "onChange", // Validate on change
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (isValid) {
      setIsFormValid(true); // Update form validity state
      console.log(data);
      onOpen(); // Open the modal
    }
  };
  return (
    <>
      <div className="flex justify-center items-center py-4 bg-gray-100">
        <span>THANH TOÁN</span>
      </div>

      <div className="cart-main flex items-center justify-center py-16">
        <div className="container px-3 flex flex-col lg:flex-row justify-between">
          <FromCheckout
            userData={userData}
            onSubmit={handleSubmit(onSubmit)}
            errors={errors}
            register={register}
          />
          <div className="cart-products ml-2">
            <div className="shadow-2xl p-3">
              <CheckoutProducts></CheckoutProducts>
            </div>
            <div>
              <Button
                onClick={handleSubmit(onSubmit)}
                onPress={onOpen}
                className="btn-submit w-full py-5 text-center bg-black text-white"
                type="submit"
              >
                HOÀN TẤT ĐƠN HÀNG
              </Button>
              <Modal
                className="bg-slate-950 text-white"
                backdrop="opaque"
                isOpen={isOpen && isFormValid}
                onOpenChange={onOpenChange}
                motionProps={{
                  variants: {
                    enter: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    },
                    exit: {
                      y: -20,
                      opacity: 0,
                      transition: {
                        duration: 0.2,
                        ease: "easeIn",
                      },
                    },
                  },
                }}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        XÁC NHẬN ĐẠT HÀNG
                      </ModalHeader>
                      <ModalBody>
                        <h1>
                          Đơn hàng của quý khách đã được tạo thành công và sẽ
                          giao đến quý khách trong thời gian sớm nhất .
                        </h1>
                      </ModalBody>
                      <ModalFooter className="flex justify-center bg-black text-white">
                        <Button onPress={onClose} onClick={removeCart}>
                          Về trang chủ
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
