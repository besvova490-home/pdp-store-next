import { IconButton } from "coax-ui-lib-0";
import { IoMdGitCompare } from "react-icons/io";

//interface
import { BaseButtonProps } from "../../types/Elements.types";


function CompareButton({ onClick }: BaseButtonProps): JSX.Element {


  return (
    <IconButton icon={<IoMdGitCompare/>} size="large" type="default" onClick={onClick}/>
  );
}

export default CompareButton;
