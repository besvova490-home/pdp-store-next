//layouts
import BaseLayout from "../layouts/BaseLayout";

//components
import ImagePlaceholder from "../components/ImagePlaceholder";
import AddToCardButton from "../elements/Buttons/AddToCardButton";
import AddToWithButton from "../elements/Buttons/AddToWithButton";
import { Table, Column } from "../components/Table";

//styles
import styles from "../assets/scss/pages/WishlistPage.module.scss";


export default function Wishlist(): JSX.Element {


  const productsList = [
    {
      productImage: "",
      title: "Learning Korean Through Tasks",
      price: "$250.00",
      author: "YouJin Kim, Bumyong Choi, Hyunae Yun, Binna Kim, Sanghee Kang"
    },
    {
      productImage: "",
      title: "Learning Korean Through Tasks",
      price: "$250.00",
      author: "YouJin Kim, Bumyong Choi, Hyunae Yun, Binna Kim, Sanghee Kang"
    }
  ];

  return (
    <BaseLayout>
      <section className={styles["renoshop-wishlist"]}>
        <div>
        pagination
        </div>
        <div className={styles["renoshop-wishlist__content"]}>
          <Table dataSource={productsList}>
            <Column
              title="Books"
              width="450px"
              render={row => (
                <div className={styles["wishlist-table__with-image"]}>
                  <div className={styles["wishlist-table__image"]}>
                    <ImagePlaceholder/>
                  </div>
                  <span>
                    { row.title }
                  </span>
                </div>
              )}
            />
            <Column
              title="Selling Price"
              dataIndex="price"
              width="150px"
            />
            <Column
              title="Authors"
              dataIndex="author"
            />
            <Column
              title="Actions"
              render={() => (
                <div className={styles["wishlist-table__actions"]}>
                  <AddToCardButton onClick={() => null} size="middle"/>
                  <AddToWithButton onClick={() => null} size="middle"/>
                </div>
              )}
            />
          </Table>
        </div>
      </section>
    </BaseLayout>
  );
}
