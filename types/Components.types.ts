import { ReactNode } from "react";

export type TableRow = {[key:string]: string | number | boolean | undefined};

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


export interface TableProps {
  children: ReactNode;
  dataSource: Array<TableRow>
}

export interface TableColumnProps {
  title?: string;
  dataIndex?: string;
  className?: string;
  width?: string;
  render?: (rowObj: TableRow) => JSX.Element;
}

