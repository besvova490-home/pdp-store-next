//layouts
import BaseLayout from "../layouts/BaseLayout";

//components
import ComparisonTable from "../components/Comparison";

//styles
import styles from "../assets/scss/pages/WishlistPage.module.scss";


export default function Wishlist(): JSX.Element {
  

  return (
    <BaseLayout>
      <section className={styles["renoshop-wishlist"]}>
        <div>
        pagination
        </div>
        <ComparisonTable/>
      </section>
    </BaseLayout>
  );
}
