import { IconButton } from "coax-ui-lib-0";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

//interface
import { BaseButtonProps } from "../../types/Elements.types";


function AddToWithButton({ onClick, size = "large", inWishList }: BaseButtonProps & { inWishList?: boolean }): JSX.Element {


  return (
    <IconButton icon={inWishList ? <AiFillHeart/> : <AiOutlineHeart/>} size={size} type="default" onClick={onClick}/>
  );
}

export default AddToWithButton;
