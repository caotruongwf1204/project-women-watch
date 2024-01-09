import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function ProductCart(product: any) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">{product.price}</small>
        <h4 className="font-bold text-large">{product.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
      <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={product.thumbnail}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
