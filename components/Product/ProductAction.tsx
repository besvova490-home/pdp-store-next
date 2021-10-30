//assets
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";


//styles
import styles from "../../assets/scss/components/Product.module.scss";


interface ProductActionsInterface {
  inWishList: boolean;
  onWishListClick: () => void;
}

function ProductActions({ inWishList, onWishListClick }: ProductActionsInterface): JSX.Element {


  return (
    <div className={styles["product-cart__action"]}>
      <div className={styles.action__item}>
        {
          inWishList
            ? <AiFillHeart className={"icon-component-base"}onClick={onWishListClick}/>
            : <AiOutlineHeart className={"icon-component-base"} onClick={onWishListClick}/>
        }
      </div>
      <div className={styles.action__item}>
        <FaShoppingCart className={"icon-component-base"}/>
      </div>
      <div className={styles.action__item}>
        <IoMdGitCompare className={"icon-component-base"}/>
      </div>
    </div>
  );
}


export default ProductActions;
