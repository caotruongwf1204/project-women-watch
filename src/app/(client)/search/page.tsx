import FilterProducts from "../component/products/filter-products";
import Selection from "../component/products/selection";
import { getSearch } from "../service/product.service";
import ProductCart from "../component/products/product-card";
import Link from "next/link";
import NextImage from "next/image";

export const metadata = {
  title: "Tìm kiếm",
  description: "Tìm kiếm sản phẩm bạn mong muốn.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { q: searchValue } = searchParams as { [key: string]: string };

  const products = await getSearch(searchValue);
  console.log(products);

  return (
    <>
      <div className="flex justify-center items-center py-4 bg-gray-100">
        <span>TÌM KIẾM: &quot;{searchValue}&quot;</span>
      </div>
      <div className="flex items-center justify-center">
        <div className="container flex py-24">
          <FilterProducts></FilterProducts>
          <div className="lg:w-9/12 px-5 w-full">
            <Selection></Selection>
            {products.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8">
                <NextImage
                  priority={true}
                  width={280}
                  height={280}
                  className="object-cover"
                  alt="logo"
                  src="/empty_products.svg"
                />
                <h1 className="text-4xl w-full text-center text-gray-300">KHÔNG TÌM THẤY SẢN PHẨM NÀO.</h1>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
                {products.map((product: any) => (
                  <Link key={product.id} href={`/collection/${product.id}`}>
                    <ProductCart key={product.id} {...product}></ProductCart>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
