import fetch from "../index";

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
      console.log(e);
    }
  }
};
