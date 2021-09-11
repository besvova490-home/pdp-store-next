import { Text } from "coax-ui-lib";

//interfaces
import { AuthLayoutInterface } from "../types/Layout.types";

//elements
import LinkCustom from "../elements/LinkCustom";


function AuthFormLayout({ children, formTitle }: AuthLayoutInterface): JSX.Element {


  return (
    <div className={"auth-form-layout"}>
      <div className={"auth-form-layout__links-group"}>
        <LinkCustom label={"Login"} href={"/login"} size="l"/>
        <LinkCustom label={"Registration"} href={"/register"} size="l"/>
      </div>
      <div className={"auth-form-layout__content"}>
        <Text type="secondary" italic>{ formTitle }</Text>
        { children }
      </div>
    </div>
  );
}

export default AuthFormLayout;
