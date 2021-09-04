import { Button } from "coax-ui-lib";
import { FaShoppingCart } from "react-icons/fa";

//interface
import { BaseButtonProps } from "../../types/Elements.types";


function AddToCardButton({ onClick, size = "large" }: BaseButtonProps): JSX.Element {

  
  return (
    <Button label="Add to cart" icon={<FaShoppingCart/>} size={size} type="default" onClick={onClick}/>
  );
}

export default AddToCardButton;
