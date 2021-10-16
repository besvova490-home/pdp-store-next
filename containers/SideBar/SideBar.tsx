import { Text, IconButton, Input, Checkbox } from "coax-ui-lib-0";
import { FaSearch } from "react-icons/fa";

//components
import SideBarCategoryItem from "./components/SideBarCategoryItem";
import ProductSimple from "../../components/Product/ProductSimple";

import { Category } from "../../types/ResponsesTypes.types";

//styles
import styles from "../../assets/scss/containers/SideBar.module.scss";
import ImagePlaceholder from "../../components/ImagePlaceholder";

function SideBar({ categoriesList }: { categoriesList: Array<Category> }): JSX.Element {


  return (
    <aside className={styles["renoshop-side-bar"]}>
      <div className={styles["renoshop-side-bar__block"]}>
        <Text className="bold-text text-uppercase" size="s">Categories</Text>
        <div className={`${styles["renoshop-side-bar__block-content"]} ${styles["renoshop-side-bar__block-list"]}`}>
          {
            categoriesList.map(category => (
              <SideBarCategoryItem label={category.title} count={category.booksCounter}/>
            ))
          }
        </div>
      </div>
      <div className={styles["renoshop-side-bar__block"]}>
        <Text className="bold-text text-uppercase" size="s">Price Filter</Text>
        <div className={`${styles["renoshop-side-bar__price-filter-controls"]} ${styles["renoshop-side-bar__block-content"]}`}>
          <Input value={"$100"} className={styles["renoshop-side-bar__price-filter-input"]} fullWidth/>
          <Input value={"$100"} className={styles["renoshop-side-bar__price-filter-input"]} fullWidth/>
          <IconButton icon={<FaSearch/>}/>
        </div>
      </div>
      <div className={styles["renoshop-side-bar__block"]}>
        <Text className="bold-text text-uppercase" size="s">Colors</Text>
        <div className={`${styles["renoshop-side-bar__grid-type-1"]} ${styles["renoshop-side-bar__block-content"]}`}>
          <Checkbox label="Black"/>
          <Checkbox label="White"/>
          <Checkbox label="Blue"/>
          <Checkbox label="Yellow"/>
        </div>
      </div>
      <div className={styles["renoshop-side-bar__block"]}>
        <Text className="bold-text text-uppercase" size="s">Top Rated</Text>
        <div className={`${styles["renoshop-side-bar__grid-type-1"]} ${styles["renoshop-side-bar__block-content"]}`}>
          <ProductSimple/>
          <ProductSimple/>
          <ProductSimple/>
        </div>
      </div>
      <div className={styles["renoshop-side-bar__block"]}>
        <ImagePlaceholder url={"images/other/banner.png"}/>
      </div>
    </aside>
  );
}

export default SideBar;
