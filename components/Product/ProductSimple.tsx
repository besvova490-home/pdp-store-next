import Link from "next/link";

//components
import ImagePlaceholder from "../ImagePlaceholder";

//styles
import styles from "../../assets/scss/components/ProductSimple.module.scss";


function ProductSimple(): JSX.Element {


  return (
    <Link href="#">
      <a className={styles["product-card-simple"]}>
        <div className={styles["product-card-simple__image"]}>
          <ImagePlaceholder/>
        </div>
        <div className={styles["product-card-simple__description"]}>
          <h3 className={`${styles["product-card-simple__title"]} black-color-1`}>Casual men wearing cool shoe</h3>
          <p className={`${styles["product-card-simple__amount"]} primary-color`}>$250.00</p>
        </div>
      </a>
    </Link>
  );
}

export default ProductSimple;
