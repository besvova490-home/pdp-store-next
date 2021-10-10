import { ReactNode } from "react";

import { Category } from "./ResponsesTypes.types";


export interface BaseLayoutInterface {
	children: ReactNode | Array<ReactNode>;
}

export interface LayoutWithSideBarProps extends BaseLayoutInterface {
	categoriesList: Array<Category>;
}

export interface ProductsLayoutInterface {
	children: ReactNode;
}

export interface AuthLayoutInterface extends BaseLayoutInterface {
  formTitle?: string;
}

