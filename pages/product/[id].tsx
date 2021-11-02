import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import Head from "next/head";
import { IoLogoTwitter } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { InputNumber, Rating, IconFacebookButton, IconButton } from "coax-ui-lib-0";
import { FacebookShareButton, TwitterShareButton, TelegramShareButton } from "react-share";

//layouts
import BaseLayout from "../../layouts/BaseLayout";

//container
import { ProductReview } from "../../containers";

//components
import { Carousel } from "../../components/Carousel";

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
  const { title, amount, description, shortDescription, thumbnailLink, averageRating, categories, authors, id } = props;

  const itemUrl = `${process.env.NEXT_PUBLIC_APP_URL}/product/${id}`;


  return (
    <BaseLayout>
      <Head>
        <title>Renoshop | {title}</title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta property="url" content={itemUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="_token" content="" />
        <meta name="robots" content="noodp" />
        <meta property="title" content={title} />
        <meta property="quote" content={title} />
        <meta name="description" content={description} />
        <meta property="image" content={thumbnailLink} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:quote" content={title} />
        <meta property="og:hashtag" content="#books" />
        <meta property="og:image" content={thumbnailLink} />
        <meta content="image/*" property="og:image:type" />
        <meta property="og:url" content={itemUrl} />
        <meta property="og:site_name" content="CampersTribe" />
        <meta property="og:description" content={description} />
      </Head>
      <section className={styles["renoshop-single-product"]} data-testid="single-product-page">
        <div className={styles["renoshop-single-product__wrapper"]}>
          <div className={`${styles["renoshop-single-product__block"]} ${styles["renoshop-single-product__main-info"]}`}>
            <div className={styles["renoshop-single-product__images-block"]}>
              <div className={styles["renoshop-single-product__image"]}>
                <img src={thumbnailLink} alt={title} className="custom-img"/>
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
                <div className={styles["renoshop-single-product__share-btns"]}>
                  <FacebookShareButton url={itemUrl}>
                    <IconFacebookButton/>
                  </FacebookShareButton>
                  <TwitterShareButton url={itemUrl}>
                    <IconButton icon={<IoLogoTwitter/>}/>
                  </TwitterShareButton>
                  <TelegramShareButton url={itemUrl}>
                    <IconButton icon={<FaTelegramPlane/>}/>
                  </TelegramShareButton>
                </div>
                <div className={styles["renoshop-single-product__categories-authors"]}>
                  <div className={styles["renoshop-single-product__categories-authors-list"]}>
                    <p>Categories:</p>
                    <ul>
                      { categories?.map((category: string, index: number) => (
                        <li key={`${category}-${index}`}>{category}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles["renoshop-single-product__categories-authors-list"]}>
                    <p>Authors:</p>
                    <ul>
                      { authors?.map((author: string, index: number) => (
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
