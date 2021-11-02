import { Title, Text } from "coax-ui-lib-0";

//components
import Product from "../../components/Product";

//interfaces
import { Book } from "../../types/ResponsesTypes.types";

//styles
import styles from "../../assets/scss/containers/TopSalles.module.scss";


function TopSalles({ topItems }: { topItems: Array<Book> }): JSX.Element {


  return (
    <section className={styles["top-selles"]}>
      <div className={`${styles["top-selles__description"]} ${styles["top-selles__item"]}`}>
        <Title level={5}><span className={"heading-3 bold-text"}>Best sellers</span></Title>
        <Text size="s" type="primary" italic>The best productions from us</Text>
        <div className={styles["top-selles__description-text"]}>
          <Text>Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna
            aliqua.
          </Text>
        </div>
      </div>
      {
        topItems.map(book => (
          <Product {...book}/>
        ))
      }
    </section>
  );
}

export default TopSalles;
