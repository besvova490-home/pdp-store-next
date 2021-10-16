//styles
import styles from "../../assets/scss/pages/ProfilePage.module.scss";


function AddressesSettings(): JSX.Element {


  return (
    <div className={`${styles["renoshop-profile__form-content"]} ${styles["renoshop-profile__form-content_one-column"]}`}>
        Shipping address
    </div>
  );
}

export default AddressesSettings;
