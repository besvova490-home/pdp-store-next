import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import { InputNumber, Rating } from "coax-ui-lib-0";

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

//interfases
import { BookFullObj } from "../../types/ResponsesTypes.types";

//helpers
import { getAllProducts, getProductsById } from "../../helpers/api/product";

//styles
import styles from "../../assets/scss/containers/ProductPage.module.scss";


function ProductTemplate(props: BookFullObj): JSX.Element {
  const { title, amount, description, shortDescription, thumbnailLink, averageRating, categories, authors } = props;


  return (
    <BaseLayout>
      <section className={styles["renoshop-single-product"]}>
        <p>breadcrumbs</p>
        <div className={styles["renoshop-single-product__wrapper"]}>
          <div className={`${styles["renoshop-single-product__block"]} ${styles["renoshop-single-product__main-info"]}`}>
            <div className={styles["renoshop-single-product__images-block"]}>
              <div className={styles["renoshop-single-product__image"]}>
                <img src={thumbnailLink} alt={title} className="custom-img"/>
              </div>
              <div className={styles["renoshop-single-product__carousel"]}>
                <CarouselSimple/>
              </div>
            </div>
            <div className={styles["renoshop-single-product__content"]}>
              <div>
                <h1 className={styles["renoshop-single-product__title"]}>{ title }</h1>
                <div className={styles["renoshop-single-product__price-rating"]}>
                  <p className="primary-color">${ amount }</p>
                  <div className={styles["renoshop-single-product__dividing-line"]}/>
                  <Rating disabled rating={averageRating}/>
                </div>
                <div className={styles["renoshop-single-product__categories-authors"]}>
                  <div className={styles["renoshop-single-product__categories-authors-list"]}>
                    <p>Categories:</p>
                    <ul>
                      { categories.map((category: string, index: number) => (
                        <li key={`${category}-${index}`}>{category}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles["renoshop-single-product__categories-authors-list"]}>
                    <p>Authors:</p>
                    <ul>
                      { authors.map((author: string, index: number) => (
                        <li key={`${author}-${index}`}>{author}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className={styles["renoshop-single-product__description"]}>
                  { shortDescription }
                </p>
              </div>
              <div className={styles["renoshop-single-product__filters"]}>
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
            <ProductReview description={description}/>
          </div>
          <div className={styles["renoshop-single-product__block"]}>
            <Carousel title="Related Products"/>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { books } = await getAllProducts();

  return {
    fallback: true,
    paths: books.map(({ id }) => ({ params: { id: `${id}` } }))
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const book = await getProductsById(`${params.id}`);


  return {
    notFound: !book.id,
    props: { ...book },
  };
};


export default ProductTemplate;
