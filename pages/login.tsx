//layouts
import BaseLayout from "../layouts/BaseLayout";
import AuthFormLayout from "../layouts/AuthFormLayout";

//containers
import { LoginForm } from "../containers/Auth";

//styles
import styles from "../assets/scss/pages/AuthPage.module.scss";


function LoginPage(): JSX.Element {


  return (
    <BaseLayout>
      <section className={`base-page-container ${styles["renoshop-auth-page"]}`}>
        <AuthFormLayout formTitle="Log In Your Account">
          <LoginForm/>
        </AuthFormLayout>
      </section>
    </BaseLayout>
  );
}

export default LoginPage;
