import { Input, Text, Rating, TextArea, Button } from "coax-ui-lib";

//styles
import styles from "../../assets/scss/components/ProductReviewForm.module.scss";

function ProductReviewForm(): JSX.Element {
  return (
    <form className={styles["product-review-form"]}>
      <Text fontWeight="bold">Add a review</Text>
      <div className={styles["product-review-form__input-group"]}>
        <Input placeholder="Your name ..." fullWidth/>
        <Input placeholder="Your e-mail ..." fullWidth/>
      </div>
      <div className={styles["product-review-form__review-info"]}>
        <div className={styles["product-review-form__review-info-header"]}>
          <span>Your Review</span>
          <p className={styles["product-review-form__review-rating"]}><span>Your Rating:</span><Rating rating={0}/></p>
        </div>
        <TextArea/>
      </div>
      <Button label={"Submit"}/>
    </form>
  );
}

export default ProductReviewForm;
