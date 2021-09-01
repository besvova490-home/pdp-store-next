import { Button } from "coax-ui-lib";
import { FaShoppingCart } from "react-icons/fa";

//interface
import { BaseButtonProps } from "../../types/Elements.types";


function AddToCardButton({ onClick }: BaseButtonProps): JSX.Element {

  
  return (
    <Button label="Add to cart" icon={<FaShoppingCart/>} size="large" type="default" onClick={onClick}/>
  );
}

export default AddToCardButton;
