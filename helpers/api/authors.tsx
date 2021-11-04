import fetch from "./index";

//interfases
import { Author } from "../../types/ResponsesTypes.types";

export const getAuthorsList = async (): Promise<{authorsList: Array<Author>, counter: number | string}> => {
  try {
    const data = await fetch({
      url: "/authors/?withoutPagination=true",
      method: "GET"
    });
    
    return data;
  } catch (e) {
    console.log(e);
  }
};
