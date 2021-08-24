import BuyNowButton from "../../elements/Buttons/BuyNowButton";

//components
import { Title, Text } from "coax-ui-lib";

//styles
import styles from "../../assets/scss/containers/BestWoocommerce.module.scss";


function BestWoocommerce(): JSX.Element {
  return (
    <section className={styles["top-category"]}>
      <div>
        <Title level={2} className={styles["top-category__title"]}><span className={"secondary-color"}>The Best</span><br/>
          <span className="primary-color">Woocommerce</span>
        </Title>
        <Text type={"secondary"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br/>sed
         doeiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <BuyNowButton className={styles["top-category__btn"]}/>
      </div>
    </section>
  );
}

export default BestWoocommerce;
