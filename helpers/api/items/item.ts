import fetch from "../index";

//helpers
import errorBoundary from "../../errorBoundary";

//interfaces
import { Book } from "../../../types/ResponsesTypes.types";

const booksApi = {
  async createNewBook (data): Promise<void> {
    try {
      const resp = await fetch({
        url: "/books/create-book",
        method: "POST",
        data
      });

      return resp;
    } catch (e) {
      errorBoundary(e);
    }
  },

  async getMyBooks (): Promise<{ booksList: Array<Book> }> {
    try {
      const resp = await fetch({
        url: "/books/my-books",
        method: "get",
      });

      return resp;
    } catch (e) {
      errorBoundary(e);
    }
  },

  async updateMyBook (bookId: string, data: Record<string, unknown>): Promise<void> {
    try {
      const resp = await fetch({
        url: `/books/${bookId}`,
        method: "put",
        data
      });

      return resp;
    } catch (e) {
      errorBoundary(e);
    }
  },

  async deleteBook (bookId: string): Promise<void> {
    try {
      const resp = await fetch({
        url: `/books/${bookId}`,
        method: "delete",
      });

      return resp;
    } catch (e) {
      errorBoundary(e);
    }
  },
};

export default booksApi;
