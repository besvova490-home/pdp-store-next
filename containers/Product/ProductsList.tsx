import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconButton, Text, classNames } from "coax-ui-lib";

//components
import Product from "../../components/Product";
import ProductFull from "../../components/Product/ProductFull";

//styles
import styles from "../../assets/scss/components/ProductsList.module.scss";


function ProductList(): JSX.Element {
  const [productsDisplayType, setProductsDisplayType] = useState<string>("lines");

  const productListClassNames = classNames({
    [styles["renoshop-products-list__grid-blocks"]]: productsDisplayType === "blocks",
    [styles["renoshop-products-list__grid-lines"]]: productsDisplayType === "lines",
  });


  return (
    <section className={styles["renoshop-products-list"]}>
      <div className={styles["renoshop-products-list__top"]}>
        <div className={styles["renoshop-products-list__display-settings"]}>
          <Text type="secondary" size="s">Showing 1–12 of 44 results</Text>
          <div>Select tag</div>
        </div>
        <div className={styles["renoshop-products-list__grid-actions"]}>
          <IconButton icon={<CgMenuGridR/>} onClick={() => setProductsDisplayType("blocks")} type={productsDisplayType === "blocks" ? "primary" : "default"}/>
          <IconButton icon={<GiHamburgerMenu/>} onClick={() => setProductsDisplayType("lines")} type={productsDisplayType === "lines" ? "primary" : "default"}/>
        </div>
      </div>
      <div className={productListClassNames}>
        {
          Array(6).fill(1).map((_, index) => (productsDisplayType === "lines" ? <ProductFull key={index}/> : <Product key={index}/>))
        }
      </div>
    </section>
  );
}

export default ProductList;
