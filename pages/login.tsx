import { useState } from "react";
import { useRouter } from "next/router";

//layouts
import BaseLayout from "../layouts/BaseLayout";
import AuthFormLayout from "../layouts/AuthFormLayout";

//containers
import { LoginForm } from "../containers/Auth";

//helpers
import auth from "../helpers/api/auth/auth";

//styles
import styles from "../assets/scss/pages/AuthPage.module.scss";


function LoginPage(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const handleSubmit = (data: { email: string, password: string }) => {
    setLoading(true);
    auth.login(data)
      .then(() => router.push("/profile?tab=user-information"))
      .catch(e => setErrors(e))
      .finally(() => setLoading(false));
  };


  return (
    <BaseLayout>
      <section className={`base-page-container ${styles["renoshop-auth-page"]}`}>
        <AuthFormLayout formTitle="Log In Your Account">
          <LoginForm handleSubmit={handleSubmit} loading={loading} errors={errors}/>
        </AuthFormLayout>
      </section>
    </BaseLayout>
  );
}

export default LoginPage;
