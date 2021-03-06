import Link from "next/link";
import { Rating } from "coax-ui-lib-0";

//components
import ImagePlaceholder from "../ImagePlaceholder";
import ProductActions from "./ProductAction";

//interfases
import { Book } from "../../types/ResponsesTypes.types";

//styles
import styles from "../../assets/scss/components/Product.module.scss";


interface ProductFullInterface extends Book {
  inWishList?: boolean;
  handleAddToWishList?: (bookId: string | number) => void;
  handleDeleteFromWishList?: (bookId: string | number) => void;
}


function Product(props: ProductFullInterface): JSX.Element {
  const { id, title, amount, thumbnailLink, averageRating, inWishList } = props;

  //TODO remuve this (just testing)
  if (!id) return <div/>;


  return (
    <div className={styles["product-cart"]}>
      <div className={styles["product-cart__image-container"]}>
        <ImagePlaceholder url={thumbnailLink} className={styles["product-cart__image"]}/>
        <ProductActions
          inWishList={inWishList}
          onWishListClick={() => {
            inWishList
              ? props.handleDeleteFromWishList(props.id)
              : props.handleAddToWishList(props.id);
          }}
        />
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
