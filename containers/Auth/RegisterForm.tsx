import { Input, Button, Checkbox } from "coax-ui-lib";

//elements
import LinkCustom from "../../elements/LinkCustom";


function RegisterForm():JSX.Element {


  return (
    <>
      <Input placeholder="First Name" fullWidth/>
      <Input placeholder="Last Name" fullWidth/>
      <Input placeholder="Email" fullWidth/>
      <Input placeholder="Phone Number" fullWidth/>
      <Input placeholder="Password" fullWidth type="password"/>
      <Input placeholder="Password Confirm" fullWidth type="password"/>
      <Checkbox label="Newsletter Subscribe"/>
      <LinkCustom href="/login" label="Already have an account? Sign in"/>
      <Button label="Register" size="large"/>
    </>
  );
}

export default RegisterForm;
