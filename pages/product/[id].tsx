import { InputNumber } from "coax-ui-lib";
import Head from "next/head";

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
      <Head>
        <title>Test</title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta property="url" content="http://localhost:3000/product/1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="_token" content="" />
        <meta name="robots" content="noodp" />
        <meta property="title" content={"test"} />
        <meta property="quote" content={"test"} />
        <meta name="description" content={"LOrem ipsum"} />
        <meta property="image" content={"https://picsum.photos/200/300?grayscale"} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={"Test"} />
        <meta property="og:quote" content={"test"} />
        <meta property="og:hashtag" content={"#test"} />
        <meta property="og:image" content={"https://picsum.photos/200/300?grayscale"} />
        <meta content="image/*" property="og:image:type" />
        <meta property="og:url" content={"http://localhost:3000/product/1"} />
        <meta property="og:site_name" content="CampersTribe" />
        <meta property="og:description" content={"LOrem ipsum"} />
      </Head>
      <section className={styles["renoshop-single-product"]}>
        <p>paginatio</p>
        <div className={styles["renoshop-single-product__content"]}>
          <div className={`${styles["renoshop-single-product__block"]} ${styles["renoshop-single-product__main-info"]}`}>
            <div className={styles["renoshop-single-product__images-block"]}>
              <div className={styles["renoshop-single-product__image"]}>
                <img src={"https://picsum.photos/200/300"} alt={""} className="custom-img"/>
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
