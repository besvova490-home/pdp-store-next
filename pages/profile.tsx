import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

//layouts
import UserProfileLayout from "../layouts/UserProfileLayout";
import UserProfileSettingsLayout from "../layouts/UserProfileSettingsLayout";

//containers
import UserInformation from "../containers/Profile/UserInformation";
import PasswordSettings from "../containers/Profile/PasswordSetting";
import AddressesSettings from "../containers/Profile/AddressesSettings";
import Invoices from "../containers/Profile/Invoices";

//context
import UserContextProvider from "../contexts/UserProfileContext.context";

//helpers
import auth from "../helpers/api/auth/auth";


function ProfilePage():JSX.Element {
  const [user, setUser] = useState(null);
  const { query } = useRouter();

  useEffect(() => {
    auth.profile().then(resp => setUser(resp));
  }, []);

  const renderContent = () => {
    switch (query.tab) {
      case "addresses":
        return <AddressesSettings/>;
      case "invoices":
        return <Invoices/>;
      case "password":
        return <PasswordSettings/>;
      default:
        return <UserInformation/>;
    }
  };

  if (!user) return null;

  return (
    <>
      <Head>
        <title>Renoshop | Profile</title>
      </Head>
      <UserContextProvider user={user}>
        <UserProfileLayout>
          <UserProfileSettingsLayout>
            { renderContent() }
          </UserProfileSettingsLayout>
        </UserProfileLayout>
      </UserContextProvider>
    </>
  );
}

export default ProfilePage;
