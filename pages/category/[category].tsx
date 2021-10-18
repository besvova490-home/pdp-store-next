import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";

//layouts
import LayoutWithSideBar from "../../layouts/LayoutWithSideBar";

//containers
import ProductsList from "../../containers/Product/ProductsList";

//interfases
import { Book, Category } from "../../types/ResponsesTypes.types";

//helpers
import { getProductsList, getProductsListByCategory } from "../../helpers/api/product";
import { getCategoriesList } from "../../helpers/api/categories";

interface PageInterface {
  pageItemsList: Array<Book>;
  categoriesList: Array<Category>;
  category: string;
}

export default function Home({ pageItemsList = [], categoriesList, category }: PageInterface): JSX.Element {
  const [paginationPage, setPaginationPage] = useState(1);
  const paginatioRange = {
    start: (paginationPage - 1) * 20,
    end: (paginationPage * 20) + 20,
  };

  useEffect(() => setPaginationPage(1), [pageItemsList]);

  return (
    <LayoutWithSideBar categoriesList={categoriesList || []}>
      <Head>
        <title>Renoshop | { category || "All" }</title>
      </Head>
      <ProductsList
        totalItem={pageItemsList.length}
        pageItemsList={pageItemsList}
        paginatioRange={paginatioRange}
        paginationPage={paginationPage}
        onPaginationChange={setPaginationPage}
      />
    </LayoutWithSideBar>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categoriesList = await getCategoriesList();


  return {
    fallback: false,
    paths: [
      { params: { category: "all" } },
      ...categoriesList.categories.map(category => ({ params: { category: category.title } })),
    ]
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { category } = params;

  const pageItemsList = [];
  const categoriesList = await getCategoriesList();

  if (category === "all") {
    const booksList = await getProductsList();
    pageItemsList.push(...booksList.books);
  } else {
    const booksList = await getProductsListByCategory(`${category}`);
    pageItemsList.push(...booksList.books);
  }

  return {
    notFound: !pageItemsList || !categoriesList,
    props: {
      category: category,
      pageItemsList: pageItemsList,
      categoriesList: categoriesList ? categoriesList.categories : [],
    }
  };
};
