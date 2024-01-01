
import FilterProducts from "../component/products/filter-products";
import Selection from "../component/products/selection";

export default function Accessory() {
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
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2"></div>
    </>
  );
}
