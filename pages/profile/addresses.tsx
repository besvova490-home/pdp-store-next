//layouts
import UserProfileLayout from "../../layouts/UserProfileLayout";
import UserProfileSettingsLayout from "../../layouts/UserProfileSettingsLayout";

//styles
import styles from "../../assets/scss/pages/ProfilePage.module.scss";

function ProfilePage():JSX.Element {


  return (
    <UserProfileLayout>
      <UserProfileSettingsLayout>
        <div className={`${styles["renoshop-profile__form-content"]} ${styles["renoshop-profile__form-content_one-column"]}`}>
            Shipping address
        </div>
      </UserProfileSettingsLayout>
    </UserProfileLayout>
  );
}

export default ProfilePage;
