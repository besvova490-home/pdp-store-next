//layouts
import BaseLayout from "../layouts/BaseLayout";

//containers
import { BestWoocommerce } from "../containers/HomePageContainers";
import TopSalles from "../containers/HomePageContainers/TopSalles";
import MainInfo from "../containers/HomePageContainers/MainInfo";
import DiscountContainer from "../containers/HomePageContainers/DiscountContainer";
import FeaturedProducts from "../containers/HomePageContainers/FeaturedProducts";
import SubscribeAndClients from "../containers/HomePageContainers/SubscribeAndClients";
//todo refactore


export default function Home(): JSX.Element {
  return (
    <BaseLayout>
      <BestWoocommerce/>
      <TopSalles/>
      <MainInfo/>
      <DiscountContainer/>
      <FeaturedProducts/>
      <SubscribeAndClients/>
    </BaseLayout>
  );
}
