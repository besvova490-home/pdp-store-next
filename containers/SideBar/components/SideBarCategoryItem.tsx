//interface
import { SideBarCategoryItemInterface } from "../../../types//Components.types";

//styles
import styles from "../../../assets/scss/containers/SideBar.module.scss";


function SideBarCategoryItem({ label, count, active }: SideBarCategoryItemInterface): JSX.Element {


  return (
    <div className={`${styles["renoshop-side-bar__categories-item"]} ${active ? styles["renoshop-side-bar__categories-item_active"] : ""}`}>
      <span>{ label }</span>
      <span> ({ count })</span>
    </div>
  );
}

export default SideBarCategoryItem;
