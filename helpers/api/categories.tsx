import client from "../api";

//interfases
import { Category } from "../../types/ResponsesTypes.types";

export const getCategoriesList = async (): Promise<{categories: Array<Category>, counter: number | string}> => {
  try {
    const { data } = await client.get("/categories/?withoutPagination=true");

    return data;
  } catch (e) {
    console.log(e);
  }
};
