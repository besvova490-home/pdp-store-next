import { useState, useEffect } from "react";
import { Rating } from "coax-ui-lib-0";

//layouts
import BaseLayout from "../layouts/BaseLayout";

//components
import ImagePlaceholder from "../components/ImagePlaceholder";
import AddToCardButton from "../elements/Buttons/AddToCardButton";
import AddToWithButton from "../elements/Buttons/AddToWithButton";
import { Table, Column } from "../components/Table";

//helpers
import wishListApi from "../helpers/api/items/wishList";

//styles
import styles from "../assets/scss/pages/WishlistPage.module.scss";


export default function Wishlist(): JSX.Element {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    wishListApi.getUserWishList().then(resp => setWishList(resp.wishList));
  }, []);

  const handleDeleteFromWishList = (id: string) => {
    wishListApi.deleteFromWishList(id)
      .then(() => {
        const newWishList = wishList.filter(bookItem => bookItem.id !== id);

        setWishList(newWishList);
      });
  };


  return (
    <BaseLayout>
      <section className={styles["renoshop-wishlist"]}>
        <div>
        pagination
        </div>
        <div className={styles["renoshop-wishlist__content"]}>
          <Table dataSource={wishList}>
            <Column
              title="Books"
              width="450px"
              render={row => (
                <div className={styles["wishlist-table__with-image"]}>
                  <div className={styles["wishlist-table__image"]}>
                    <ImagePlaceholder url={`${row.thumbnailLink}`}/>
                  </div>
                  <span>
                    { row.title }
                  </span>
                </div>
              )}
            />
            <Column
              title="Selling Price"
              dataIndex="amount"
              width="150px"
            />
            <Column
              title="Other Info"
              render={row => (
                <div className={styles["wishlist-table__grid-column"]}>
                  <div className={styles["wishlist-table__grid-row"]}>Rating: <Rating disabled rating={+row.averageRating}/></div>
                  <div>Total Pages: {row.pageCount}</div>
                  <div className={styles["wishlist-table__secondary-text"]}>Short Description: {row.shortDescription}</div>
                </div>
              )}
            />
            <Column
              title="Actions"
              render={row => (
                <div className={styles["wishlist-table__actions"]}>
                  <AddToCardButton onClick={() => null} size="middle"/>
                  <AddToWithButton onClick={() => handleDeleteFromWishList(`${row.id}`)} size="middle"/>
                </div>
              )}
            />
          </Table>
        </div>
      </section>
    </BaseLayout>
  );
}
