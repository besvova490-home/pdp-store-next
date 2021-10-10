import { Title, Text, Input, Button } from "coax-ui-lib";

//components
import ImagePlaceholder from "../../components/ImagePlaceholder";

//styles
import styles from "../../assets/scss/containers/SubscribeAndClients.module.scss";


function SubscribeAndClients(): JSX.Element {


  return (
    <section className={styles["subscribe-clients"]}>
      <div className={styles.subscribe}>
        <div className={styles["subscribe-clients__background"]}>
          <ImagePlaceholder url={"/images/other/Subscribe.png"}/>
        </div>
        <div className={styles.subscribe__content}>
          <Title level={6} className="bold-text white-color">Get Out Special Discount</Title>
          <Text size="s" fontWeight="semibold" className={`${styles.subscribe__description} white-color`}>Donec eu tristique felis. Duis augue mi, auctor ut purus
            et, dignissim aliquet quam.
            register your email for news and special offers</Text>
          <div className={styles.subscribe__form}>
            <Input placeholder="E-mail address ..."/>
            <Button label="GET COUPON NOW"/>
          </div>
        </div>
      </div>
      <div className={styles.clients}>
        <div className={styles.clients__log}><ImagePlaceholder url={"/images/clients/client1.png"}/></div>
        <div className={styles.clients__log}><ImagePlaceholder url={"/images/clients/client2.png"}/></div>
        <div className={styles.clients__log}><ImagePlaceholder url={"/images/clients/client3.png"}/></div>
        <div className={styles.clients__log}><ImagePlaceholder url={"/images/clients/client4.png"}/></div>
      </div>
    </section>
  );
}

export default SubscribeAndClients;
