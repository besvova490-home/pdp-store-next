import { Button } from "coax-ui-lib";

//interface
import { BaseLayoutInterface } from "../types/Layout.types";

//styles
import styles from "../assets/scss/pages/ProfilePage.module.scss";


function UserProfileSettingsLayout({ children }: BaseLayoutInterface): JSX.Element {


  return (
    <section className={styles["renoshop-profile__wrapper"]}>
      <div className={styles["renoshop-profile__title"]}>
      Account information
      </div>
      <div className={styles["renoshop-profile__form"]}>
        { children }
        <Button size="large" label="Save"/>
      </div>
    </section>
  );
}

export default UserProfileSettingsLayout;
