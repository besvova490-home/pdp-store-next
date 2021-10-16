import { Input, Button } from "coax-ui-lib-0";
import { Formik, Form } from "formik";
import * as Yup from "yup";

//elements
import LinkCustom from "../../elements/LinkCustom";
import { Upload } from "../../elements/Upload";

//interfases
import { RegisterData } from "../../helpers/api/auth/auth.types";

//styles
import styles from "../../assets/scss/pages/AuthPage.module.scss";


function RegisterForm({ handleSubmit }: { handleSubmit: (data: RegisterData) => void }):JSX.Element {
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


  return (
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
        </Form>
      )}
    </Formik>
  );
}

export default RegisterForm;
