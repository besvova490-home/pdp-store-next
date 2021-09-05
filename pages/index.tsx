import Head from "next/head";

//layouts
import LayoutWithSideBar from "../layouts/LayoutWithSideBar";

//containers
import ProductsList from "../containers/Product/ProductsList";


export default function Home(): JSX.Element {
  return (
    <LayoutWithSideBar>
      <Head>
        <title>Test</title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta property="url" content="http://localhost:3000/product/1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="_token" content="" />
        <meta name="robots" content="noodp" />
        <meta property="title" content={"test"} />
        <meta property="quote" content={"test"} />
        <meta name="description" content={"LOrem ipsum"} />
        <meta property="image" content={"https://picsum.photos/200/300?grayscale"} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={"Test"} />
        <meta property="og:quote" content={"test"} />
        <meta property="og:hashtag" content={"#test"} />
        <meta property="og:image" content={"https://picsum.photos/200/300?grayscale"} />
        <meta content="image/*" property="og:image:type" />
        <meta property="og:url" content={"http://localhost:3000/product/1"} />
        <meta property="og:site_name" content="CampersTribe" />
        <meta property="og:description" content={"LOrem ipsum"} />
      </Head>
      <ProductsList/>
    </LayoutWithSideBar>
  );
}
