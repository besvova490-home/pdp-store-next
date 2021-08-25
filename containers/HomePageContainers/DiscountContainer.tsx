//components
import ImagePlaceholder from "../../components/ImagePlaceholder";

//styles
import styles from "../../assets/scss/containers/Discount.module.scss";


function DiscountContainer(): JSX.Element {
  return (
    <section className={styles.discounts}>
      <div className={styles.discounts__item}>
        <ImagePlaceholder url={"/images/discounts/discont1.png"}/>
      </div>
      <div className={`${styles.discounts__item} ${styles.discounts__item_light}`}>
        <ImagePlaceholder url={"/images/discounts/discont2.png"}/>
      </div>
      <div className={styles.discounts__item}>
        <ImagePlaceholder url={"/images/discounts/discont3.png"}/>
      </div>
    </section>
  );
}

export default DiscountContainer;
