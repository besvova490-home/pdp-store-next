import Link from "next/link";
import { Rating } from "coax-ui-lib";

//components
import ImagePlaceholder from "../ImagePlaceholder";
import ProductActions from "./ProductAction";

//interfases
import { Book } from "../../types/ResponsesTypes.types";

//styles
import styles from "../../assets/scss/components/Product.module.scss";


function Product({ id, title, amount, thumbnailLink, averageRating }: Book): JSX.Element {
  return (
    <div className={styles["product-cart"]}>
      <div className={styles["product-cart__image-container"]}>
        <ImagePlaceholder url={thumbnailLink} className={styles["product-cart__image"]}/>
        <ProductActions/>
      </div>
      <div className={styles["product-cart__description"]}>
        <Link href={`/product/${id}`}><a className={styles["product-cart__title"]}>{ title }</a></Link>
        <Link href={`/product/${id}`}><a className={styles["product-cart__amount"]}>${ amount }</a></Link>
        <Rating rating={averageRating || 1} disabled/>
      </div>
    </div>
  );
}


export default Product;
