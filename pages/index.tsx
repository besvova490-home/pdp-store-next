//layouts
import LayoutWithSideBar from "../layouts/LayoutWithSideBar";

//containers
import ProductsList from "../containers/Product/ProductsList";


export default function Home(): JSX.Element {
  return (
    <LayoutWithSideBar>
      <ProductsList/>
    </LayoutWithSideBar>
  );
}
