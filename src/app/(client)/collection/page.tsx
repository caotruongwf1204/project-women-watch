import FilterProducts from "../component/products/filter-products";
import Selection from "../component/products/selection";
import { listProducts } from "../service/product.service";
import ProductCart from "../component/products/product-card";
import Link from "next/link";

export default async function Collection({
  searchParams,
}: {
  searchParams: { category: string; sort: string; price_lte: string };
}) {
  const products = await listProducts(
    searchParams.category,
    searchParams.price_lte,
    searchParams.sort
  );
  console.log(products);
  console.log(searchParams);
  return (
    <>
      <div className="flex justify-center items-center py-4 bg-gray-100">
        {searchParams.category ? (
          <span className="uppercase">&quot;{searchParams.category}&quot;</span>
        ) : (
          <span className="uppercase">ĐỒNG HỒ</span>
        )}
      </div>
      <div className="flex items-center justify-center">
        <div className="container flex  py-24">
          <FilterProducts></FilterProducts>
          <div className="lg:w-9/12 px-5 w-full">
            <Selection></Selection>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
              {products.map((product: any) => (
                <Link key={product.id} href={`/collection/${product.id}`}>
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
