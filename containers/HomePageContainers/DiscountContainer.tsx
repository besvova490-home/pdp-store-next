//components
import ImagePlaceholder from "../../components/ImagePlaceholder";

//assets
import discount1 from "../../assets/image/discounts/discont1.png";
import discount2 from "../../assets/image/discounts/discont2.png";
import discount3 from "../../assets/image/discounts/discont3.png";

//styles
import styles from "../../assets/scss/containers/Discount.module.scss";


function DiscountContainer(): JSX.Element {
  return (
    <section className={styles.discounts}>
      <div className={styles.discounts__item}>
        <ImagePlaceholder url={discount1}/>
      </div>
      <div className={`${styles.discounts__item} ${styles.discounts__item_light}`}>
        <ImagePlaceholder url={discount2}/>
      </div>
      <div className={styles.discounts__item}>
        <ImagePlaceholder url={discount3}/>
      </div>
    </section>
  );
}

export default DiscountContainer;
