
import Accessories from "./component/home/accessories";
import Filter from "./component/home/filter";
import HotProduct from "./component/home/hot-products";
import SimpleSlider from "./component/home/slider";
import Support from "./component/home/support";

export default function Home() {
  return (
    <main>
      <SimpleSlider></SimpleSlider>
      <Support></Support>
      <Filter></Filter>
      <Accessories></Accessories>
      <HotProduct></HotProduct>
    </main>
  );
}
