//components
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import SideBar from "../containers/SideBar";

//interface
import { LayoutWithSideBarProps } from "../types/Layout.types";


function LayoutWithSideBar({ children, categoriesList }: LayoutWithSideBarProps): JSX.Element {


  return (
    <div className="page-content">
      <Header/>
      <p>pagination</p>
      <div className="layout-with-side-bar__content">
        <SideBar categoriesList={categoriesList}/>
        <main>
          { children }
        </main>
      </div>
      <Footer/>
    </div>
  );
}


export default LayoutWithSideBar;
