import { Text } from "coax-ui-lib";

//components
import ImagePlaceholder from "../ImagePlaceholder";

//elements
import AddToCardButton from "../../elements/Buttons/AddToCardButton";
import AddToWithButton from "../../elements/Buttons/AddToWithButton";
import CompareButton from "../../elements/Buttons/CompareButton";

//styles
import styles from "../../assets/scss/components/Product.module.scss";


function ProductFull(): JSX.Element {


  return (
    <div className={styles["product-cart-full"]}>
      <div className={styles["product-cart-full__img"]}>
        <ImagePlaceholder/>
      </div>
      <div className={styles["product-cart-full__left"]}>
        <Text className="bold-text">Treatise on the</Text>
        <p className="primary-color">$250.00</p>
        <p className={`black-color-1 ${styles["product-cart-full__description"]}`}>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English.
        </p>
        <Text type="secondary">Shoes, T-Shirt teen</Text>
        <div className={styles["product-cart-full__btn-group"]}>
          <AddToCardButton onClick={() => null}/>
          <AddToWithButton onClick={() => null}/>
          <CompareButton onClick={() => null}/>
        </div>
      </div>
    </div>
  );
}

export default ProductFull;
