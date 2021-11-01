//layouts
import BaseLayout from "../layouts/BaseLayout";

//elements
import LinkCustom from "../elements/LinkCustom";

//assets
import PageNotFoundIcon from "../components/IconComponents/PageNotFound";

//styles
import styles from "../assets/scss/pages/NotFoundPage.module.scss";


function PageNotFound(): JSX.Element {


  return (
    <BaseLayout>
      <section className={styles["renoshop-page-not-found"]}>
        <div>
          <PageNotFoundIcon className={styles["renoshop-page-not-found__icon"]}/>
        </div>
        <p className={styles["renoshop-page-not-found__text"]}>
          Ohh! Page not found
          It seems we can't find what you're looking for.
          Go back to <LinkCustom href="/" label="Homepage" className={styles["renoshop-page-not-found__text-link"]}/>
        </p>
      </section>
    </BaseLayout>
  );
}


export default PageNotFound;
