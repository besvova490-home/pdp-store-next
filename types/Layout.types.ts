import { ReactNode } from "react";


export interface BaseLayoutInterface {
	children: ReactNode | Array<ReactNode>;
}

export interface ProductsLayoutInterface {
	children: ReactNode;
}

export interface AuthLayoutInterface extends BaseLayoutInterface {
  formTitle?: string;
}

