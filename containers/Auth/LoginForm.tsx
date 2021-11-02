import { useState } from "react";
import { useRouter } from "next/router";
import { Input, Button, GoogleButton, FacebookButton, Text, GitHubButton } from "coax-ui-lib-0";
import { toast } from "react-toastify";
import { useGoogleLogin, GoogleLoginResponse, useGoogleLogout } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Formik, Form } from "formik";
import * as Yup from "yup";

//elements
import LinkCustom from "../../elements/LinkCustom";

//helpers
import auth from "../../helpers/api/auth/auth";


//styles
import styles from "../../assets/scss/pages/AuthPage.module.scss";


const validationShema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Can't be empty"),
  password: Yup.string().required("Can't be empty")
});
const initialValies = {
  email: "",
  password: "",
};


function LoginForm():JSX.Element {
  const [loading, setLoading] = useState(false);
  const [responseErrors, setResponseErrors] = useState<Record<string, unknown>>({});
  const router = useRouter();

  const handleSubmit = (data: { email: string, password: string }) => {
    setLoading(true);
    auth.login(data)
      .then(() => router.push("/profile?tab=user-information"))
      .catch(e => {
        setResponseErrors(e);
      })
      .finally(() => setLoading(false));
  };

  const { signOut } = useGoogleLogout({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  });


  const { signIn } = useGoogleLogin({
    onSuccess: (resp: GoogleLoginResponse) => {
      setLoading(true);
      auth.loginGoogle({ token: resp.tokenId })
        .then(() => router.push("/profile?tab=user-information"))
        .catch(e => {
          toast.error(e.msg);
          signOut();
        })
        .finally(() => setLoading(false));
    },
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    isSignedIn: false,
  });

  const facebookLogin = ({ accessToken }) => {
    setLoading(true);
    auth.loginFacebook({ token: accessToken })
      .then(() => router.push("/profile?tab=user-information"))
      .catch(e => setResponseErrors(e))
      .finally(() => setLoading(false));
  };


  return (
    <Formik
      initialValues={initialValies}
      validationSchema={validationShema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={data => handleSubmit(data)}
    >
      {({ errors, setFieldValue }) => (
        <Form className={styles["renoshop-auth-form"]}>
          <Input
            placeholder="Email"
            fullWidth
            error={errors.email || responseErrors.email}
            onChange={e => setFieldValue("email", e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            fullWidth
            error={errors.password || responseErrors.password}
            onChange={e => setFieldValue("password", e.target.value)}
          />
          <LinkCustom href="#" label="Forgot your password?"/>
          <Button label="Login" size="large" loading={loading}/>
          <div className={styles["renoshop-auth-form__socials-container"]}>
            <Text type="secondary" size="s">Login with</Text>
            <div className={styles["renoshop-auth-form__btn-group"]}>
              <GoogleButton label="Google" onClick={signIn}/>
              <FacebookLogin
                autoLoad={false}
                appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
                callback={facebookLogin}
                render={({ onClick }) => (
                  <FacebookButton
                    label="Facebook"
                    onClick={() => onClick()}
                  />
                )}
              />
              <GitHubButton
                href={`https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.NEXT_PUBLIC_GIT_HUB_CLIENT}&redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}/authCallback`}
                label="Git Hub"
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
