//imterface
import { ButtonProps } from "../../types/Elements.types";

//styles
import styles from "../../assets/scss/elements/Button.module.scss";


function BuyNowButton ({ className }: ButtonProps): JSX.Element {
  return (
    <button className={`${styles["renoshop-btn"]} ${className}`}>buy now</button>
  );
}

export default BuyNowButton;
