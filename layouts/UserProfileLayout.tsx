//components
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import SideBarMenu from "../components/SideBarMenu";

//context

//interface
import { BaseLayoutInterface } from "../types/Layout.types";


function UserProfileLayout({ children }: BaseLayoutInterface):JSX.Element {
  return (
    <div className="page-content">
      <Header/>
      <div className="base-page-layout user-profile-layout">
        <SideBarMenu/>
        { children }
      </div>
      <Footer/>
    </div>
  );
}

export default UserProfileLayout;
