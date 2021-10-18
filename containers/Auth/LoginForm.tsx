import { Input, Button, GoogleButton, FacebookButton, Text } from "coax-ui-lib-0";
import { Formik, Form } from "formik";
import * as Yup from "yup";

//elements
import LinkCustom from "../../elements/LinkCustom";

//styles
import styles from "../../assets/scss/pages/AuthPage.module.scss";

interface LoginForm {
  handleSubmit: (data: { email: string, password: string }) => void;
  loading?: boolean;
  errors?: Record<string, unknown>;
}


function LoginForm({ handleSubmit, loading, errors: responseErrors }: LoginForm):JSX.Element {

  const validationShema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Can't be empty"),
    password: Yup.string().required("Can't be empty")
  });
  const initialValies = {
    email: "",
    password: "",
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
              <GoogleButton label="Google"/>
              <FacebookButton label="Facebook"/>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
