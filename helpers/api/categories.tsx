import fetch from "./index";

//interfases
import { Category } from "../../types/ResponsesTypes.types";

export const getCategoriesList = async (): Promise<{categories: Array<Category>, counter: number | string}> => {
  try {
    const data = await fetch({
      url: "/categories/?withoutPagination=true",
      method: "GET",
    });
    
    return data;
  } catch (e) {
    console.log(e);
  }
};
