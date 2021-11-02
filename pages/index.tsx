import { GetStaticProps } from "next";

//layouts
import BaseLayout from "../layouts/BaseLayout";

//containers
import { BestWoocommerce } from "../containers/HomePageContainers";
import TopSalles from "../containers/HomePageContainers/TopSalles";
import MainInfo from "../containers/HomePageContainers/MainInfo";
import DiscountContainer from "../containers/HomePageContainers/DiscountContainer";
import FeaturedProducts from "../containers/HomePageContainers/FeaturedProducts";
import SubscribeAndClients from "../containers/HomePageContainers/SubscribeAndClients";

//interfaces
import { Book } from "../types/ResponsesTypes.types";

//helpers
import { getProducts } from "../helpers/api/product";


export default function Home({ books }: { books: Array<Book> }): JSX.Element {
  return (
    <BaseLayout>
      <BestWoocommerce/>
      <TopSalles topItems={books.slice(0, 3)}/>
      <MainInfo/>
      <DiscountContainer/>
      <FeaturedProducts booksList={books.slice(3, 15)}/>
      <SubscribeAndClients/>
    </BaseLayout>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const { books } = await getProducts({ sortBy: "averageRating" });

  return {
    props: {
      books
    },
  };
};
