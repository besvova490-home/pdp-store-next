import { Title, Text, Input, Button } from "coax-ui-lib";

//components
import ImagePlaceholder from "../../components/ImagePlaceholder";

//assets
import subscribeImg from "../../assets/image/other/Subscribe.png";
import client1 from "../../assets/image/clients/client1.png";
import client2 from "../../assets/image/clients/client2.png";
import client3 from "../../assets/image/clients/client3.png";
import client4 from "../../assets/image/clients/client4.png";


//styles
import styles from "../../assets/scss/containers/SubscribeAndClients.module.scss";


function SubscribeAndClients(): JSX.Element {


  return (
    <section className={styles["subscribe-clients"]}>
      <div className={styles.subscribe}>
        <div className={styles["subscribe-clients__background"]}>
          <ImagePlaceholder url={subscribeImg}/>
        </div>
        <div className={styles.subscribe__content}>
          <Title level={6} className="bold-text white-color">Get Out Special Discount</Title>
          <Text size="s" fontWeight="semibold" className={`${styles.subscribe__description} white-color`}>Donec eu tristique felis. Duis augue mi, auctor ut purus
            et, dignissim aliquet quam.
            register your email for news and special offers</Text>
          <div className={styles.subscribe__form}>
            <Input placeholder="E-mail address ..."/>
            <Button label="GET COUPON NOW" size="large"/>
          </div>
        </div>
      </div>
      <div className={styles.clients}>
        <div className={styles.clients__log}><ImagePlaceholder url={client1}/></div>
        <div className={styles.clients__log}><ImagePlaceholder url={client2}/></div>
        <div className={styles.clients__log}><ImagePlaceholder url={client3}/></div>
        <div className={styles.clients__log}><ImagePlaceholder url={client4}/></div>
      </div>
    </section>
  );
}

export default SubscribeAndClients;
