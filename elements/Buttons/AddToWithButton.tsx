import { IconButton } from "coax-ui-lib";
import { AiFillHeart } from "react-icons/ai";

//interface
import { BaseButtonProps } from "../../types/Elements.types";


function AddToWithButton({ onClick }: BaseButtonProps): JSX.Element {


  return (
    <IconButton icon={<AiFillHeart/>} size="large" type="default" onClick={onClick}/>
  );
}

export default AddToWithButton;
