import React from "react";

//interface
import { BaseLayoutInterface } from "../types/Layout.types";

//styles
import styles from "../assets/scss/pages/ProfilePage.module.scss";


function UserProfileSettingsLayout({
  children,
  tabButton,
  tabTitle
}: BaseLayoutInterface & { tabButton: React.ReactNode, tabTitle?: string }): JSX.Element {


  return (
    <section className={styles["renoshop-profile__wrapper"]}>
      <div className={styles["renoshop-profile__title"]}>
        { tabTitle }
      </div>
      <div className={styles["renoshop-profile__form"]}>
        { children }
        <div>
          { tabButton }
        </div>
      </div>
    </section>
  );
}

export default UserProfileSettingsLayout;
