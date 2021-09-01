//components
import Header from "../containers/Header";
import Footer from "../containers/Footer";

//interface
import { BaseLayoutInterface } from "../types/Layout.types";


function BaseLayout({ children }: BaseLayoutInterface): JSX.Element {


  return (
    <div className="page-content">
      <Header/>
      <div className="base-page-layout">
        { children }
      </div>
      <Footer/>
    </div>
  );
}


export default BaseLayout;
