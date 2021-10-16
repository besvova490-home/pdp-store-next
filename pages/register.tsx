import Head from "next/head";
import { useRouter } from "next/router";

//layouts
import BaseLayout from "../layouts/BaseLayout";
import AuthFormLayout from "../layouts/AuthFormLayout";

//containers
import { RegisterForm } from "../containers/Auth";

//helpers
import auth from "../helpers/api/auth/auth";

//interfases
import { RegisterData } from "../helpers/api/auth/auth.types";

//styles
import styles from "../assets/scss/pages/AuthPage.module.scss";


function LoginPage(): JSX.Element {
  const router = useRouter();

  const handleSubmit = (data: RegisterData) => {
    auth.register(data).then(() => router.push("/login"));
  };

  return (
    <BaseLayout>
      <Head>
        <title>RenoshopBee | Register</title>
      </Head>
      <section className={`base-page-container ${styles["renoshop-auth-page"]}`}>
        <AuthFormLayout formTitle="Register An Account">
          <RegisterForm handleSubmit={handleSubmit}/>
        </AuthFormLayout>
      </section>
    </BaseLayout>
  );
}

export default LoginPage;
