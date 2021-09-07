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
  size?: "s" | "l"
}
