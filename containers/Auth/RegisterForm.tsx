import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import { Input, Button, Text, GoogleButton, FacebookButton } from "coax-ui-lib-0";
import { useGoogleLogin, GoogleLoginResponse, useGoogleLogout } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Formik, Form } from "formik";
import * as Yup from "yup";

//elements
import LinkCustom from "../../elements/LinkCustom";
import { Upload } from "../../elements/Upload";

//helpers
import auth from "../../helpers/api/auth/auth";

//interfases
import { RegisterData } from "../../helpers/api/auth/auth.types";

//styles
import styles from "../../assets/scss/pages/AuthPage.module.scss";
import "react-toastify/dist/ReactToastify.css";

const validationShema = Yup.object().shape({
  avatar: Yup.mixed(),
  firstName: Yup.string().required("Can't be empty"),
  lastName: Yup.string().required("Can't be empty"),
  email: Yup.string().email("Invalid email").required("Can't be empty"),
  password: Yup.string().required("Can't be empty").matches(
    /^[A-Za-z0-9!@#$%^&*()<>+=?-]{8,30}$/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
});
const initialValies = {
  avatar: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};


function RegisterForm():JSX.Element {
  const router = useRouter();

  const handleSubmit = (data: RegisterData) => {
    auth.register(data).then(() => router.push("/login"));
  };

  const { signOut } = useGoogleLogout({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  });

  const { signIn } = useGoogleLogin({
    onSuccess: (resp: GoogleLoginResponse) => {
      auth.registerGoogle({ token: resp.tokenId })
        .then(() => {
          router.push("/profile?tab=user-information");
          toast.success("You have bee succsefuly registered");
        })
        .catch(e => {
          signOut();
          toast.error(e);
        });
    },
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    isSignedIn: false,
  });

  const facebookRegister = ({ accessToken }) => {
    auth.registerFacebook({ token: accessToken })
      .then(() => {
        router.push("/profile?tab=user-information");
        toast.success("You have bee succsefuly registered");
      })
      .catch(e => {
        console.log(e);
        toast.error(e.msg ? e.msg : e);
      });
  };


  return (
    <>
      <Formik
        initialValues={initialValies}
        validationSchema={validationShema}
        onSubmit={data => handleSubmit(data)}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ errors, setFieldValue, values }) => (
          <Form className={styles["renoshop-auth-form"]}>
            <div className={styles["renoshop-auth-form__row-center"]}>
              <Upload previewImage={values.avatar} onUpload={image => setFieldValue("avatar", image.url)}/>
            </div>
            <Input
              placeholder="First Name"
              fullWidth
              error={errors.firstName}
              onChange={e => setFieldValue("firstName", e.target.value)}
            />
            <Input
              placeholder="Last Name"
              fullWidth
              error={errors.lastName}
              onChange={e => setFieldValue("lastName", e.target.value)}
            />
            <Input
              placeholder="Email"
              fullWidth
              error={errors.email}
              onChange={e => setFieldValue("email", e.target.value)}
            />
            <Input
              placeholder="Password"
              fullWidth
              type="password"
              error={errors.password}
              onChange={e => setFieldValue("password", e.target.value)}
            />
            <Input
              placeholder="Password Confirm"
              fullWidth
              type="password"
              error={errors.confirmPassword}
              onChange={e => setFieldValue("confirmPassword", e.target.value)}
            />
            <LinkCustom href="/login" label="Already have an account? Sign in"/>
            <Button label="Register" size="large" htmlType="submit"/>
            <div className={styles["renoshop-auth-form__socials-container"]}>
              <Text type="secondary" size="s">Register with</Text>
              <div className={styles["renoshop-auth-form__btn-group"]}>
                <GoogleButton label="Google" onClick={signIn}/>
                
                <FacebookLogin
                  appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
                  callback={facebookRegister}
                  render={({ onClick }) => (
                    <FacebookButton
                      label="Facebook"
                      onClick={onClick}
                    />
                  )}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer/>
    </>
  );
}

export default RegisterForm;
