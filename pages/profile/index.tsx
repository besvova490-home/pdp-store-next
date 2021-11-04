import { useRouter } from "next/router";
import Head from "next/head";
import { Button } from "coax-ui-lib-0";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

//layouts
import UserProfileLayout from "../../layouts/UserProfileLayout";
import UserProfileSettingsLayout from "../../layouts/UserProfileSettingsLayout";

//containers
import UserBooks from "../../containers/Profile/UserBooks";
import UserInformation from "../../containers/Profile/UserInformation";
import PasswordSettings from "../../containers/Profile/PasswordSetting";
import AddressesSettings from "../../containers/Profile/AddressesSettings";
import Invoices from "../../containers/Profile/Invoices";

//context
import UserContextProvider from "../../contexts/UserProfileContext.context";

//helpers
import auth from "../../helpers/api/auth/auth";

function ProfilePage({ profile }):JSX.Element {
  const { query } = useRouter();

  const profileComponents = {
    addresses: {
      component: <AddressesSettings/>,
      title: "Addresses Settings",
      button: <Button size="large" label="Save"/>,
    },
    invoices: {
      component: <Invoices/>,
      title: "My Invoices",
    },
    password: {
      component: <PasswordSettings/>,
      title: "Security Settings",
      button: <Button size="large" label="Save"/>,
    },
    "my-books": {
      component: <UserBooks/>,
      title: "Security Settings",
      button: <Button size="large" label="Create New Book" type="default" href="/profile/my-books/new"/>
    },
    "user-information": {
      component: <UserInformation/>,
      title: "Account information",
      button: <Button size="large" label="Save"/>,
    }
  };

  return (
    <>
      <Head>
        <title>Renoshop | Profile</title>
      </Head>
      <UserContextProvider user={profile}>
        <UserProfileLayout>
          <UserProfileSettingsLayout
            tabTitle={profileComponents[query.tab as string]?.title}
            tabButton={profileComponents[query.tab as string]?.button}
          >
            { profileComponents[query.tab as string]?.component }
          </UserProfileSettingsLayout>
        </UserProfileLayout>
      </UserContextProvider>
    </>
  );
}

export default ProfilePage;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const profile = await auth.profile();

  return {
    props: {
      profile
    }
  };
};
