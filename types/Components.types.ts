export interface ImagePlaceholderProps {
  url?: string;
  alt?: string;
  className?: string;
}

export interface SideBarCategoryItemInterface {
  label: string | JSX.Element;
  count?: string | number;
  active?: boolean;
}
