import Link from "next/link";
import { classNames } from "coax-ui-lib";

//interfaces
import { LinkCustomInterface } from "../types/Elements.types";

//styles
import styles from "../assets/scss/elements/LinkCustom.module.scss";


function LinkCustom({ href, as, className, onCLick, label, size = "s" }: LinkCustomInterface): JSX.Element {

  const linkClassName = classNames(
    className,
    styles["renoshop-link"],
    styles[`renoshop-link_size-${size}`]
  );

  
  return <Link href={href || "#"} as={as || href}><a className={linkClassName} onClick={() => onCLick && onCLick()}>{label}</a></Link>;
}


export default LinkCustom;
