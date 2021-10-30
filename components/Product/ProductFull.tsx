import Link from "next/link";
import { Text, Rating } from "coax-ui-lib-0";

//components
import ImagePlaceholder from "../ImagePlaceholder";

//elements
import AddToCardButton from "../../elements/Buttons/AddToCardButton";
import AddToWithButton from "../../elements/Buttons/AddToWithButton";
import CompareButton from "../../elements/Buttons/CompareButton";

//interfases
import { Book } from "../../types/ResponsesTypes.types";

//styles
import styles from "../../assets/scss/components/Product.module.scss";

interface ProductFullInterface extends Book {
  inWishList?: boolean;
  handleAddToWishList?: (bookId: string | number) => void;
  handleDeleteFromWishList?: (bookId: string | number) => void;
}


function ProductFull(props: ProductFullInterface): JSX.Element {
  const { id, title, amount, thumbnailLink, averageRating, shortDescription, pageCount, inWishList } = props;

  return (
    <div className={styles["product-cart-full"]}>
      <div className={styles["product-cart-full__img"]}>
        <Link href={`/product/${id}`}>
          <a>
            <ImagePlaceholder url={thumbnailLink}/>
          </a>
        </Link>
      </div>
      <div className={styles["product-cart-full__left"]}>
        <Link href={`/product/${id}`}><a className={styles["product-cart__title"]}>{ title }</a></Link>
        <Link href={`/product/${id}`}><a className={styles["product-cart__amount"]}>${ amount }</a></Link>
        <Rating rating={averageRating | 1} disabled/>
        <p className={`black-color-1 ${styles["product-cart-full__description"]}`}>
          { shortDescription }
        </p>
        <Text type="secondary">Total pages: {pageCount}</Text>
        <div className={styles["product-cart-full__btn-group"]}>
          <AddToCardButton onClick={() => null}/>
          <AddToWithButton
            onClick={() => {
              inWishList ? props.handleDeleteFromWishList(id) : props.handleAddToWishList(id);
            }}
            inWishList={inWishList}
          />
          <CompareButton onClick={() => null}/>
        </div>
      </div>
    </div>
  );
}

export default ProductFull;
