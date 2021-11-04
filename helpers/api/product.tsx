//helpers
import fetch from "./index";
import queryBuilder from "../queryBuilder";
import errorBoundary from "../errorBoundary";

//interfases
import { Book } from "../../types/ResponsesTypes.types";

interface QueryInterface {
  startIndex?: string | number,
  maxResults?: string | number,
  sortBy?: string
}

export const getProductsList = async (): Promise<{books: Array<Book>, counter: number}> => {
  try {
    const data = await fetch({
      url: "/books",
      method: "GET",
    });

    return data;
  } catch (e) {
    errorBoundary(e);
  }
};

export const getProductsById = async (bookId: number | string, token = ""): Promise<Book> => {
  try {
    const data = await fetch({
      url: `/books/${bookId}`,
      method: "GET",
    }, token);

    return data;
  } catch (e) {
    errorBoundary(e);
  }
};

export const getProductsListByCategory = async (
  categoryTitle: string
): Promise<{books: Array<Book>, counter: number}> => {
  try {
    let booksCounter = 0;
    let totalBooks = 0;
    const books = [];

    do {
      const data = await fetch({
        url: `/books/get-by-category/${categoryTitle}`,
        method: "GET",
      });
      totalBooks = data.counter;
      booksCounter += data.books.length;
      books.push(...data.books);
    } while (totalBooks < booksCounter);

    return {
      books,
      counter: totalBooks,
    };
  } catch (e) {
    errorBoundary(e);
  }
};

export const getAllProducts = async (): Promise<{books: Array<Book>, counter: number}> => {
  try {
    let booksCounter = 0;
    let totalBooks = 0;
    const books = [];

    do {
      const data = await fetch({
        url: "/books",
        method: "GET",
      });
      totalBooks = data.counter;
      booksCounter += data.books.length;
      books.push(...data.books);
    } while (totalBooks < booksCounter);

    return {
      books,
      counter: totalBooks,
    };
  } catch (e) {
    errorBoundary(e);
  }
};

export const getProducts = async (args: QueryInterface): Promise<{books: Array<Book>}> => {
  const queryString = queryBuilder(args as Record<string, unknown>);

  try {
    const { books } = await fetch({
      url: `/books?${queryString}`,
      method: "GET",
    });

    return { books };
  } catch (e) {
    errorBoundary(e);
  }
};
