import axios from "axios";
import { handleDjangoErrors } from "@/lib/utils";
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getNewsEventsApi = async (is_home_page) => {
  try {
    const response = await axios.get(
      BASE_URL + `news-event/${is_home_page ? "?is_home_page=True" : ""}`
    );
    return response.data;
  } catch (errorData) {
    handleDjangoErrors(errorData);
    throw Error(errorData.response?.data ?? "something went wrong");
  }
};

export const getSingleNewsEventsApi = async (id) => {
  try {
    const response = await axios.get(BASE_URL + `news-event/?id=${id}`);
    return response.data;
  } catch (errorData) {
    handleDjangoErrors(errorData);
    throw Error(errorData.response?.data ?? "something went wrong");
  }
};
