import FilterProducts from "../component/products/filter-products";
import Selection from "../component/products/selection";
import { listAccessory } from "../service/product.service";
import ProductCart from "../component/product-card";
import Link from "next/link";



export default async function Accessory() {
  const products = await listAccessory();

  console.log(products);
  return (
    <>
      <div className="flex justify-center items-center py-4 bg-gray-100">
        <span>PHỤ KIỆN</span>
      </div>
      <div className="flex items-center justify-center">
        <div className="container flex  py-24">
          <FilterProducts></FilterProducts>
          <div className="lg:w-9/12 px-5 w-full">
            <Selection></Selection>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2">
              {products.map((product: any) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <ProductCart
                    key={product.idProductCart}
                    {...product}
                  ></ProductCart>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
