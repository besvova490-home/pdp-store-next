import { IconButton } from "coax-ui-lib-0";
import { AiFillHeart } from "react-icons/ai";

//interface
import { BaseButtonProps } from "../../types/Elements.types";


function AddToWithButton({ onClick, size = "large" }: BaseButtonProps): JSX.Element {


  return (
    <IconButton icon={<AiFillHeart/>} size={size} type="default" onClick={onClick}/>
  );
}

export default AddToWithButton;
