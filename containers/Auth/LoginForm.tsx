import { Input, Button } from "coax-ui-lib";

//elements
import LinkCustom from "../../elements/LinkCustom";


function LoginForm():JSX.Element {


  return (
    <>
      <Input placeholder="Email"/>
      <Input placeholder="Password"/>
      <LinkCustom href="#" label="Forgot your password?"/>
      <Button label="Login" size="large"/>
    </>
  );
}

export default LoginForm;
