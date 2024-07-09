import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const API_KEY = "yYTKiTwTBZsHrVBAyhtsF6tI3qqEAAACcaH_IHNlMIM";

export type Data = {
  results: [];
  total_pages: number;
};

async function getRespAPI<T extends Data>(
  topic: string,
  currentPage: number
): Promise<T> {
  const resp = await axios.get("/search/photos", {
    params: {
      client_id: API_KEY,
      query: topic,
      page: currentPage,
      per_page: 20,
    },
  });
  const data = resp.data;
  console.log(data);
  return data;
}

export default getRespAPI;
