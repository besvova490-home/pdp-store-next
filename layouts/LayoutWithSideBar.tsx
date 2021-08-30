//components
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import SideBar from "../containers/SideBar";

//interface
import { BaseLayoutInterface } from "../types/Layout.types";


function LayoutWithSideBar({ children }: BaseLayoutInterface): JSX.Element {


  return (
    <div>
      <Header/>
      <p>pagination</p>
      <div className="layout-with-side-bar__content">
        <SideBar/>
        <main>
          { children }
        </main>
      </div>
      <Footer/>
    </div>
  );
}


export default LayoutWithSideBar;
