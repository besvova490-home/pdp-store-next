import { Input, Button, Checkbox } from "coax-ui-lib";

//elements
import LinkCustom from "../../elements/LinkCustom";


function RegisterForm():JSX.Element {


  return (
    <>
      <Input placeholder="First Name"/>
      <Input placeholder="Last Name"/>
      <Input placeholder="Email"/>
      <Input placeholder="Phone Number"/>
      <Input placeholder="Password"/>
      <Input placeholder="Password Confirm"/>
      <Checkbox label="Newsletter Subscribe"/>
      <LinkCustom href="/login" label="Already have an account? Sign in"/>
      <Button label="Register" size="large"/>
    </>
  );
}

export default RegisterForm;
