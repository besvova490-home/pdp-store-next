import { InputNumber } from "coax-ui-lib";
import Image from "next/image";

//layouts
import BaseLayout from "../../layouts/BaseLayout";

//container
import { ProductReview } from "../../containers";

//components
import { CarouselSimple, Carousel } from "../../components/Carousel";

//elements
import AddToCardButton from "../../elements/Buttons/AddToCardButton";
import AddToWithButton from "../../elements/Buttons/AddToWithButton";
import CompareButton from "../../elements/Buttons/CompareButton";

//styles
import styles from "../../assets/scss/containers/ProductPage.module.scss";


function ProductTemplate(): JSX.Element {


  return (
    <BaseLayout>
      <section className={styles["renoshop-single-product"]}>
        <p>paginatio</p>
        <div className={styles["renoshop-single-product__content"]}>
          <div className={`${styles["renoshop-single-product__block"]} ${styles["renoshop-single-product__main-info"]}`}>
            <div className={styles["renoshop-single-product__images-block"]}>
              <div className={styles["renoshop-single-product__image"]}>
                <Image loader={() => "https://picsum.photos/200/300"} src={"https://picsum.photos/200/300"} alt={""} layout="fill" className="custom-img"/>
              </div>
              <div className={styles["renoshop-single-product__carousel"]}>
                <CarouselSimple/>
              </div>
            </div>
            <div className={styles["renoshop-single-product__content"]}>
              <div>
                <h1 className={styles["renoshop-single-product__title"]}>This is product name</h1>
                <div className={styles["renoshop-single-product__price-rating"]}>
                  <p className="primary-color">$250.00</p>
                </div>
                <p className={styles["renoshop-single-product__description"]}>
                It is a long established fact that a reader will be distracted by the readable content
                 of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                  as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                  their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                  purpose (injected humour and the like).
                </p>
              </div>
              <div className={styles["renoshop-single-product__filters"]}>
                <div className={styles["filters-first-select"]}>Select</div>
                <div className={styles["filters-second-select"]}>Select</div>
                <div className={styles["filters-amount-input"]}><InputNumber/></div>
                <div className={styles["renoshop-single-product__btn-group"]}>
                  <AddToCardButton onClick={() => null}/>
                  <AddToWithButton onClick={() => null}/>
                  <CompareButton onClick={() => null}/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["renoshop-single-product__block"]}>
            <ProductReview/>
          </div>
          <div className={styles["renoshop-single-product__block"]}>
            <Carousel title="Related Products"/>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}


export default ProductTemplate;
