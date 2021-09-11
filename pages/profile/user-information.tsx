import { Input } from "coax-ui-lib";

//layouts
import UserProfileLayout from "../../layouts/UserProfileLayout";
import UserProfileSettingsLayout from "../../layouts/UserProfileSettingsLayout";

//styles
import styles from "../../assets/scss/pages/ProfilePage.module.scss";

function ProfilePage():JSX.Element {


  return (
    <UserProfileLayout>
      <UserProfileSettingsLayout>
        <div className={styles["renoshop-profile__form-content"]}>
          <Input label="Please enter your real name to avoid issues with the delivery. *" placeholder="First Name"/>
          <Input label="Please enter your real name to avoid issues with the delivery. *" placeholder="Last Name"/>
          <div>Select</div>
          <div className={styles["renoshop-profile__input-group"]}>
            <Input label="Phone number *" placeholder="Phone Number"/>
            <Input label="Email *" placeholder="Email"/>
          </div>
        </div>
      </UserProfileSettingsLayout>
    </UserProfileLayout>
  );
}

export default ProfilePage;
