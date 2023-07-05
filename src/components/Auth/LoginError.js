import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showErrors = (errorMsg) => {
  return toast.error(errorMsg, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const successMsg = (errorMsg) => {
  return toast.success(errorMsg, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
