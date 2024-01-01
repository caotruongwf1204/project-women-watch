import FilterProducts from "../component/products/filter-products";
import Selection from "../component/products/selection";

export default function Collection() {
  return (
    <>
      <div className="flex justify-center items-center py-4 bg-gray-100">
        <span>ĐỒNG HỒ</span>
      </div>
      <div className="flex items-center justify-center">
        <div className="container flex  py-24">
          <FilterProducts></FilterProducts>
          <div className="lg:w-9/12 px-5 w-full">
            <Selection></Selection>
          </div>
        </div>
      </div>
    </>
  );
}
