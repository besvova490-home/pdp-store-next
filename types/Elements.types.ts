import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface BaseButtonProps {
  onClick: () => void;
  size?: "large" | "middle" | "small"
}


export interface ButtonProps {
	className?: string;
	label?: string;
}

export interface LinkCustomInterface {
  href: string,
  as?: string,
  className?: string,
  onCLick?: () => void,
  label?: string | number,
  size?: "s" | "l",
  children?: ReactNode | Array<ReactNode>;
}

export interface AvatarInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  url?: string;
  userName?: string;
}
