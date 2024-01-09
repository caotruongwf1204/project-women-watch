import ProductInfo from "@/app/(client)/component/detail/product-info";
import SliderDetail from "@/app/(client)/component/detail/slider-detail";
import { getAccessoryById } from "@/app/(client)/service/product.service";
import "@/app/css/products-detail.css";


export const generateMetadata = async ({ params }:any) => {
  const { slug } = params;
  const product = await getAccessoryById(slug);
  return {
    title: product.title,
    description: product.description,
    icons: product.thumbnail,
  };
};

export default async function Product({ params }:any) {
  const { slug } = params;
  const product = await getAccessoryById(slug);

  return (
    <>
      <div className="flex justify-center items-center py-4 bg-gray-100">
        <span className="text-center">{product.title}</span>
      </div>
      <div className="product-detail flex items-center justify-center pt-9 pb-10 px-4">
        <div className="container flex item-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="w-full">
              <SliderDetail item={product.image}></SliderDetail>
            </div>
            <ProductInfo product={product}></ProductInfo>
          </div>
        </div>
      </div>
    </>
  );
}
