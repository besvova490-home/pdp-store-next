import { Title, Text } from "coax-ui-lib-0";

//components
import Product from "../../components/Product";

//styles
import styles from "../../assets/scss/containers/TopSalles.module.scss";


function TopSalles(): JSX.Element {


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
      <Product/>
      <Product/>
      <Product/>
    </section>
  );
}

export default TopSalles;
