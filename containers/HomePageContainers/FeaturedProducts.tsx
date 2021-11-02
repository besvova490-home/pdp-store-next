import { Text, Title } from "coax-ui-lib-0";

//components
import Product from "../../components/Product";

//interfaces
import { Book } from "../../types/ResponsesTypes.types";

//styles
import styles from "../../assets/scss/containers/FeaturedProducts.module.scss";


export default function FeaturedProducts({ booksList }: { booksList: Array<Book> }): JSX.Element {
  return (
    <section className={styles["featured-products"]}>
      <div className={styles["featured-products__description"]}>
        <Title level={6} className="bold-text text-uppercase">Featured Products</Title>
        <Text type="primary" size="s" italic>Newest trends from top brands</Text>
      </div>
      <div className={`${styles["featured-products__products-grid"]}`}>
        {
          booksList.map(book => (
            <Product {...book} amount={"-"}/>
          ))
        }
      </div>
    </section>
  );
}
