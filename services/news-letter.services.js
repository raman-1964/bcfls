import axios from "axios";
import { handleDjangoErrors } from "@/lib/utils";
import toast from "react-hot-toast";
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const postNewsLetterApi = async (data) => {
  try {
    const response = await axios.post(BASE_URL + "news-letter/", data);
    toast.success(
      "Thanks for subscribing. We'll keep you posted on upcoming events."
    );
    return response.data;
  } catch (errorData) {
    handleDjangoErrors(errorData);
    throw Error(errorData.response?.data ?? "something went wrong");
  }
};
