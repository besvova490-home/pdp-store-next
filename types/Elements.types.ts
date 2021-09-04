export interface BaseButtonProps {
  onClick: () => void;
  size?: "large" | "middle" | "small"
}


export interface ButtonProps {
	className?: string;
	label?: string;
}
