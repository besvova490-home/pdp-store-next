import { Input, Select } from "coax-ui-lib-0";
import { useContext } from "react";
import { Country } from "country-state-city";

//context
import { UserContext } from "../../contexts/UserProfileContext.context";

//styles
import styles from "../../assets/scss/pages/ProfilePage.module.scss";

function UserInformation(): JSX.Element {
  const { user } = useContext(UserContext);
  const { firstName, lastName, email } = user;

  const countryesList = Country.getAllCountries().map(({ name, isoCode }) => ({ value: isoCode, label: name }));

  return (
    <div className={styles["renoshop-profile__form-content"]}>
      <Input
        label="Please enter your real name to avoid issues with the delivery. *"
        placeholder="First Name"
        value={firstName}
        fullWidth
      />
      <Input
        label="Please enter your real name to avoid issues with the delivery. *"
        placeholder="Last Name"
        value={lastName}
        fullWidth
      />
      <div>
        <span>Please select your real Country</span>
        <Select
          options={countryesList}
          placeholder="Your country"
          showSearch
          fullWidth
        />
      </div>
      <div className={styles["renoshop-profile__input-group"]}>
        <Input label="Phone number *" placeholder="Phone Number" fullWidth/>
        <Input
          label="Email *"
          placeholder="Email"
          value={email}
          fullWidth
        />
      </div>
    </div>
  );
}

export default UserInformation;
