import client from "../api";

//interfases
import { Book } from "../../types/ResponsesTypes.types";

export const getProductsList = async (): Promise<{books: Array<Book>, counter: number}> => {
  try {
    const { data } = await client.get("/books");

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getProductsById = async (bookId: number | string): Promise<Book> => {
  try {
    const { data } = await client.get(`/books/${bookId}`);

    return data;
  } catch (e) {
    console.log(e);
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
      const { data } = await client.get<{ books: Array<Book>, counter: number }>(`/books/get-by-category/${categoryTitle}`);
      totalBooks = data.counter;
      booksCounter += data.books.length;
      books.push(...data.books);
    } while (totalBooks < booksCounter);

    return {
      books,
      counter: totalBooks,
    };
  } catch (e) {
    console.log(e);
  }
};

export const getAllProducts = async (): Promise<{books: Array<Book>, counter: number}> => {
  try {
    let booksCounter = 0;
    let totalBooks = 0;
    const books = [];

    do {
      const { data } = await client.get<{ books: Array<Book>, counter: number }>("/books");
      totalBooks = data.counter;
      booksCounter += data.books.length;
      books.push(...data.books);
    } while (totalBooks < booksCounter);

    return {
      books,
      counter: totalBooks,
    };
  } catch (e) {
    console.log(e);
  }
};
