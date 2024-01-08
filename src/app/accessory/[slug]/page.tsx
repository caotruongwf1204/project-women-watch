import { getAccessoryById } from "@/app/(client)/service/product.service";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

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
    <main className="product-page">
      <Image
        as={NextImage}
        alt="Card background"
        className="object-cover rounded-xl overflow-hidden aspect-square"
        src={product.thumbnail}
        width={270}
        height={270}
      />
      <p>{product.title}</p>
    </main>
  );
}
