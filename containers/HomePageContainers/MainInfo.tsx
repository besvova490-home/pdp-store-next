import { Text } from "coax-ui-lib-0";

//assets
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { DiRuby } from "react-icons/di";

//styles
import styles from "../../assets/scss/containers/MainInfo.module.scss";


function MainInfo(): JSX.Element {
  return (
    <section className={styles["main-info"]}>
      <div className={styles["main-info__item"]}>
        <FaTelegramPlane className={styles["main-info__icon"]}/>
        <Text size="l" className="text-uppercase bold-text">Special offers</Text>
        <Text size="s" type="secondary">Shop Big Save Big</Text>
      </div>
      <div className={styles["main-info__item"]}>
        <IoMdRocket className={styles["main-info__icon"]}/>
        <Text size="l" className="text-uppercase bold-text">Special offers</Text>
        <Text size="s" type="secondary">Shop Big Save Big</Text>
      </div>
      <div className={styles["main-info__item"]}>
        <RiArrowLeftRightFill className={styles["main-info__icon"]}/>
        <Text size="l" className="text-uppercase bold-text">Special offers</Text>
        <Text size="s" type="secondary">Shop Big Save Big</Text>
      </div>
      <div className={styles["main-info__item"]}>
        <DiRuby className={styles["main-info__icon"]}/>
        <Text size="l" className="text-uppercase bold-text">Special offers</Text>
        <Text size="s" type="secondary">Shop Big Save Big</Text>
      </div>
    </section>
  );
}

export default MainInfo;
