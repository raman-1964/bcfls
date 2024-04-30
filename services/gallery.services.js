import axios from "axios";
import { handleDjangoErrors } from "@/lib/utils";
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getGalleryApi = async (is_home_page) => {
  try {
    const response = await axios.get(
      BASE_URL + `gallery/${is_home_page ? "?is_home_page=true" : ""}`
    );
    return response.data;
  } catch (errorData) {
    handleDjangoErrors(errorData);
    throw Error(errorData.response?.data ?? "something went wrong");
  }
};
