import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";


export default function ProductCart(product) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">{product.price}</small>
        <h4 className="font-bold text-large">{product.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl overflow-hidden aspect-square"
          src={product.thumbnail}
          width={270}
          height={270}
        />
      </CardBody>
    </Card>
  );
}
