import { Text, Button, IconButton } from "coax-ui-lib";
import { AiFillHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";

//components
import ImagePlaceholder from "../ImagePlaceholder";

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
        <p>Shoes, T-Shirt teen</p>
        <div className={styles["product-cart-full__btn-group"]}>
          <Button label="Add to cart" icon={<FaShoppingCart/>} size="large" type="default"/>
          <IconButton icon={<AiFillHeart/>} size="large" type="default"/>
          <IconButton icon={<IoMdGitCompare/>} size="large" type="default"/>
        </div>
      </div>
    </div>
  );
}

export default ProductFull;
