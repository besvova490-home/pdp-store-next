export interface Book {
  id: number;
  title: string;
  description?: string;
  shortDescription: string;
  publishedDate?: string;
  printType?: string;
  thumbnailLink?: string;
  previewLink?: string;
  amount: number | string;
  discount?: number;
  averageRating?: number;
  pageCount?: number;
}

export interface BookFullObj extends Book {
  categories: Array<string> | [];
  authors: Array<string> | [];
  previewLink: string;
}

export interface Category {
  id: number;
  title: string;
  booksCounter: number | string;
}


export interface Author {
  id: number;
  name: string;
  description: number | string;
}
