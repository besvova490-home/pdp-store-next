import { InputNumber, IconButton, Button, Input } from "coax-ui-lib-0";
import { TiDeleteOutline } from "react-icons/ti";

//layouts
import BaseLayout from "../layouts/BaseLayout";

//components
import ImagePlaceholder from "../components/ImagePlaceholder";
import Table from "../components/Table/Table";
import Column from "../components/Table/Column";

//styles
import styles from "../assets/scss/pages/WishlistPage.module.scss";


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

export default function Cart(): JSX.Element {


  return (
    <BaseLayout>
      <section className={styles["renoshop-wishlist"]}>
        <div>
        pagination
        </div>
        <div className={styles["renoshop-wishlist__content"]}>
          <div className={styles["renoshop-wishlist__table"]}>
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
                title="Authors"
                dataIndex="author"
              />
              <Column
                title="Selling Price"
                dataIndex="price"
                width="150px"
              />
              <Column
                title="Quantity"
                width="150px"
                render={() => (
                  <InputNumber/>
                )}
              />
              <Column
                title="Total"
                dataIndex="price"
                width="150px"
              />
              <Column
                title="Actions"
                render={() => (
                  <div className={styles["wishlist-table__actions"]}>
                    <IconButton icon={<TiDeleteOutline className={styles["wishlist-table__action-icon"]}/>} size="middle" type="default"/>
                  </div>
                )}
              />
            </Table>
            <div className={styles["wishlist-table__btn-group"]}>
              <Button label="Update Cart" type="default"/>
              <Button label="Continue Shopping"/>
            </div>
          </div>
          <div className={styles["oreder-form"]}>
            <div className={styles["oreder-form__main-inputs"]}>
              <div className={styles["oreder-form__coupone"]}>
                <p className={styles["oreder-form__title"]}>
                  Use Coupon Code
                </p>
                <div className={styles["oreder-form__coupone-input-wrapper"]}>
                  <Input placeholder="Enter your coupon here" label="Enter your coupon here"/>
                  <Button label="Apply"/>
                </div>
              </div>
              <div className={styles["oreder-form__shipping"]}>
                <p className={styles["oreder-form__title"]}>
                    Shipping Availability
                </p>
                <div>select</div>
                <div>select</div>
                <Input placeholder="Postcode / Zip" label="Postcode / Zip"/>
                <div>
                  <Button label="Update Totals" type="default" size="large"/>
                </div>
              </div>
            </div>
            <div className={styles["oreder-form__calculation"]}>
              <div className={styles["oreder-form__coupone"]}>
                <p className={styles["oreder-form__title"]}>
                  Use Coupon Code
                </p>
                <div className={styles["oreder-form__coupone-input-wrapper"]}>
                  <Input placeholder="Enter your coupon here" label="Enter your coupon here"/>
                  <Button label="Apply"/>
                </div>
              </div>
              <div className={styles["oreder-form__calculation-card"]}>
                <p className={styles["oreder-form__title"]}>
                  Shopping cart calcuation
                </p>
                <div className={styles["calculation-card"]}>
                  <div className={styles["calculation-card__content"]}>
                    <p className={styles["calculation-card__content-row"]}>
                      <span>Subtotal</span>
                      <span>$450</span>
                    </p>
                    <p className={styles["calculation-card__content-row"]}>
                      <span>Coupon</span>
                      <span>$-50</span>
                    </p>
                    <p className={styles["calculation-card__content-row"]}>
                      <span>Shipping</span>
                      <span>Free Shipping</span>
                    </p>
                  </div>
                  <div className={`${styles["calculation-card__total"]} ${styles["calculation-card__content-row"]}`}>
                    <span>Total</span>
                    <span>$400</span>
                  </div>
                </div>
                <div className={styles["calculation-card__btn"]}>
                  <Button label="Proceed to checkout" size="large"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
