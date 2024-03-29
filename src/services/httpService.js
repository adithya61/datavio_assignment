import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = 'https://i8tsc6o7w5.api.quickmocker.com/data/';

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  // unexpected error.
  if (!expectedError) {
    // logger.log(error);
    console.log("logging the error", error);
    toast.error("An Unexpected error occured");
  }

  return Promise.reject(error);
});


export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
