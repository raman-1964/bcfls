import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import toast from "react-hot-toast";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const handleDjangoErrors = (errorData) => {
  const error = errorData?.response?.data ?? "Something went wrong";
  // toast.error(`hello everyone`);
  if (Array.isArray(error)) {
    error.forEach((message) => {
      toast.error(`${message}`);
    });
  } else if (typeof error === "object") {
    Object.keys(error).forEach((field) => {
      if (Array.isArray(error[field])) {
        error[field].forEach((message) => {
          toast.error(`${message}`);
        });
      } else {
        toast.error(`${error[field]}`);
      }
    });
  } else {
    toast.error(`${error}`);
  }
};
