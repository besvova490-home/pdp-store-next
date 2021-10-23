import fetch from "../index";

//helpers
import errorBoundary from "../../errorBoundary";

//interfaces
import { Book } from "../../../types/ResponsesTypes.types";

const wishListApi = {
  async getUserWishList (): Promise<{ wishList: Array<Book>, count: string }> {
    try {
      const resp = await fetch({
        url: "/wish-list/",
        method: "GET"
      });

      return resp;
    } catch (e) {
      errorBoundary(e);
    }
  },

  async getUserWishListSimple (): Promise<Array<number>> {
    try {
      const resp = await fetch({
        url: "/wish-list?simple=true",
        method: "GET"
      });

      return resp.wishList;
    } catch (e) {
      errorBoundary(e);
    }
  },

  async addToMyWishList (data: { bookId: string | number }): Promise<void> {
    try {
      await fetch({
        url: "/wish-list/",
        method: "POST",
        data,
      });
    } catch (e) {
      errorBoundary(e);
    }
  },

  async deleteFromWishList (bookId: string | number): Promise<void> {
    try {
      await fetch({
        url: `/wish-list/${bookId}`,
        method: "DELETE",
      });
    } catch (e) {
      errorBoundary(e);
    }
  },
};

export default wishListApi;
