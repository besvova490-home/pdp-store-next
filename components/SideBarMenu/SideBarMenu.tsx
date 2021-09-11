import { Text } from "coax-ui-lib";

//elements
import Link from "next/link";

//styles
import styles from "../../assets/scss/components/SideBarProfileMenu.module.scss";

function SideBarMenu():JSX.Element {


  return (
    <aside className={styles["renoshop-profile-side-bar"]}>
      <div className={styles["renoshop-profile-side-bar__base-info"]}>
        <div>Avatar</div>
        <div>
          <Text type="secondary" size="s">User User</Text>
          <Text>example@gamil.com</Text>
        </div>
      </div>
      <div className={styles["renoshop-profile-side-bar__menu"]}>
        <ul>
          <li>
            <Link href="/profile/user-information">
              <a className={styles["renoshop-profile-side-bar__menu-link"]}>
                <div className={styles["renoshop-profile-side-bar__menu-item"]}>Account information</div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/profile/password">
              <a className={styles["renoshop-profile-side-bar__menu-link"]}>
                <div className={styles["renoshop-profile-side-bar__menu-item"]}>Change password</div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/profile/addresses">
              <a className={styles["renoshop-profile-side-bar__menu-link"]}>
                <div className={styles["renoshop-profile-side-bar__menu-item"]}>Shipping Address</div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/profile/invoices">
              <a className={styles["renoshop-profile-side-bar__menu-link"]}>
                <div className={styles["renoshop-profile-side-bar__menu-item"]}>Order History</div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className={styles["renoshop-profile-side-bar__menu-link"]}>
                <div className={styles["renoshop-profile-side-bar__menu-item"]}>Log Out</div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBarMenu;
