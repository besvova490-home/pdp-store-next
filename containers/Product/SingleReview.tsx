import { Rating, Text } from "coax-ui-lib-0";

//interfaces
import { SingleReviewProps } from "../../types/Components.types";

//styles
import styles from "../../assets/scss/components/SingleReview.module.scss";

function SingleReview({ authorName, authorUrl, reviewText, date, rating }: SingleReviewProps):JSX.Element {
  return (
    <div className={styles["renoshop-review"]}>
      <div className={styles["renoshop-review__image"]}>
        <img src={"https://picsum.photos/200/300"} alt={""} className={`custom-img ${styles["renoshop-review__author-image"]}`}/>
      </div>
      <div className={styles["renoshop-review__content"]}>
        <div className={styles["renoshop-review__content-header"]}>
          <Rating rating={2} disabled/>
          <div className={styles["renoshop-review__content-dividing-line"]}/>
          <Text size="s" type="secondary" italic>Jun 3,2017</Text>
        </div>
        <div className={styles["renoshop-review__content-body"]}>
          <Text size="m" fontWeight="bold">JOHN GREEN</Text>
          <p className={styles["renoshop-review__content-text"]}>
            This will go great with my Hoodie that I ordered a few weeks ag
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleReview;
