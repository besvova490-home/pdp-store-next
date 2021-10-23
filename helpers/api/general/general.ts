import fetch from "../index";

//helpers
import errorBoundary from "../../errorBoundary";

export const general = {
  async uploadImage(data: File): Promise<{ name: string; url: string }> {
    try {
      const { result } = await fetch({
        url: "/images/",
        headers: { "Content-Type": data.type },
        method: "POST",
        data
      });

      return result;
    } catch (e) {
      errorBoundary(e);
    }
  }
};
