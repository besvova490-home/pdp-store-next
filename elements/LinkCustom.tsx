import Link from "next/link";
import { classNames } from "coax-ui-lib-0";

//interfaces
import { LinkCustomInterface } from "../types/Elements.types";

//styles
import styles from "../assets/scss/elements/LinkCustom.module.scss";


function LinkCustom({ href, as, className, onCLick, label, children, size = "s" }: LinkCustomInterface): JSX.Element {

  const linkClassName = classNames(
    className,
    styles["renoshop-link"],
    styles[`renoshop-link_size-${size}`]
  );

  
  return <Link href={href || "#"} as={as || href}><a className={linkClassName} onClick={() => onCLick && onCLick()}>{ children || label}</a></Link>;
}


export default LinkCustom;
