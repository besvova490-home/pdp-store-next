import Head from "next/head";
import { useRouter } from "next/router";

//layouts
import BaseLayout from "../layouts/BaseLayout";
import AuthFormLayout from "../layouts/AuthFormLayout";

//containers
import { RegisterForm } from "../containers/Auth";

//styles
import styles from "../assets/scss/pages/AuthPage.module.scss";


function LoginPage(): JSX.Element {
  return (
    <BaseLayout>
      <Head>
        <title>RenoshopBee | Register</title>
      </Head>
      <section className={`base-page-container ${styles["renoshop-auth-page"]}`}>
        <AuthFormLayout formTitle="Register An Account">
          <RegisterForm/>
        </AuthFormLayout>
      </section>
    </BaseLayout>
  );
}

export default LoginPage;
