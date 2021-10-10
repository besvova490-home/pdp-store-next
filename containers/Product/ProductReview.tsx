import { Tabs, Panel } from "coax-ui-lib";

//components
import SingleReview from "./SingleReview";
import ProductReviewForm from "./ProductReviewForm";

//styles
import styles from "../../assets/scss/containers/ProductPage.module.scss";


function ProductReview({ description }: { description: string }): JSX.Element {

  return (
    <div>
      <Tabs>
        <Panel tab="Description">
          { description }
        </Panel>
        <Panel tab="Reviews (2)">
          <div className={styles["product-reviews-list"]}>
            <SingleReview rating={2} date={"12"}/>
            <SingleReview rating={2} date={"12"}/>
          </div>
          <div className={styles["product-review-form"]}>
            <ProductReviewForm/>
          </div>
        </Panel>
      </Tabs>
    </div>
  );
}

export default ProductReview;
