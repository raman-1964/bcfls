import axios from "axios";
import { handleDjangoErrors } from "@/lib/utils";
import toast from "react-hot-toast";
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const postOpportunitiesApi = async (data) => {
  try {
    const response = await axios.post(BASE_URL + "opportunities/", data);
    toast.success("data sent successfully");
    return response.data;
  } catch (errorData) {
    handleDjangoErrors(errorData);
    throw Error(errorData.response?.data ?? "something went wrong");
  }
};
