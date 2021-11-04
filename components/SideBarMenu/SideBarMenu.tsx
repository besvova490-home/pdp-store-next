import { useContext } from "react";
import { Text } from "coax-ui-lib-0";

//context
import { UserContext } from "../../contexts/UserProfileContext.context";

//elements
import Link from "next/link";
import Avatar from "../../elements/Avatar";

//styles
import styles from "../../assets/scss/components/SideBarProfileMenu.module.scss";

function SideBarMenu():JSX.Element {
  const { user } = useContext(UserContext);


  return (
    <aside className={styles["renoshop-profile-side-bar"]}>
      <div className={styles["renoshop-profile-side-bar__base-info"]}>
        <Avatar userName={"Test User"} url={user.avatar}/>
        <div>
          <Text type="secondary" size="s">{`${user.firstName} ${user.lastName}`}</Text>
          <Text>{user.email}</Text>
        </div>
      </div>
      <div className={styles["renoshop-profile-side-bar__menu"]}>
        <ul>
          <li>
            <Link href="/profile?tab=user-information">
              <a className={styles["renoshop-profile-side-bar__menu-link"]}>
                <div className={styles["renoshop-profile-side-bar__menu-item"]}>Account information</div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/profile?tab=password">
              <a className={styles["renoshop-profile-side-bar__menu-link"]}>
                <div className={styles["renoshop-profile-side-bar__menu-item"]}>Change password</div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/profile?tab=addresses">
              <a className={styles["renoshop-profile-side-bar__menu-link"]}>
                <div className={styles["renoshop-profile-side-bar__menu-item"]}>Shipping Address</div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/profile?tab=my-books">
              <a className={styles["renoshop-profile-side-bar__menu-link"]}>
                <div className={styles["renoshop-profile-side-bar__menu-item"]}>My Books</div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/profile?tab=invoices">
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
