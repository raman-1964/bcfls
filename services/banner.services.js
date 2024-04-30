import axios from "axios";
import { handleDjangoErrors } from "@/lib/utils";
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getBannerApi = async () => {
  try {
    const response = await axios.get(BASE_URL + `banner/`);
    return response.data;
  } catch (errorData) {
    handleDjangoErrors(errorData);
    throw Error(errorData.response?.data ?? "something went wrong");
  }
};
