import { Input } from "coax-ui-lib-0";

//styles
import styles from "../../assets/scss/pages/ProfilePage.module.scss";


function PasswordSettings(): JSX.Element {


  return (
    <div className={`${styles["renoshop-profile__form-content"]} ${styles["renoshop-profile__form-content_one-column"]}`}>
      <Input label="Old Password *"/>
      <Input label="Confirm Old Password *"/>
      <Input label="New Old Password *"/>
    </div>
  );
}

export default PasswordSettings;
