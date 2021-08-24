import { Text, Title } from "coax-ui-lib";

//components
import Product from "../../components/Product";

//styles
import styles from "../../assets/scss/containers/FeaturedProducts.module.scss";


export default function FeaturedProducts(): JSX.Element {
  return (
    <section className={styles["featured-products"]}>
      <div className={styles["featured-products__description"]}>
        <Title level={6} className="bold-text text-uppercase">Featured Products</Title>
        <Text type="primary" size="s" italic>Newest trends from top brands</Text>
      </div>
      <div className={`${styles["featured-products__products-grid"]}`}>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </section>
  );
}
