import Link from "next/link";

//components
import ImagePlaceholder from "../ImagePlaceholder";
import ProductActions from "./ProductAction";

//styles
import styles from "../../assets/scss/components/Product.module.scss";


function Product(): JSX.Element {


  return (
    <div className={styles["product-cart"]}>
      <div className={styles["product-cart__image"]}>
        <ImagePlaceholder/>
        <ProductActions/>
      </div>
      <div className={styles["product-cart__description"]}>
        <Link href="/product/1"><a className={styles["product-cart__title"]}>Cruise Dual Analog</a></Link>
        <Link href="/product/1"><a className={styles["product-cart__amount"]}>$235.00</a></Link>
      </div>
    </div>
  );
}


export default Product;
