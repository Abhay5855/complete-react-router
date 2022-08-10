import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  
});

instance.interceptors.response.use(null, (error) => {

  const expectedError =
    error.response &&
    error.response.status >= 404 &&
    error.response.status < 500;

  if (expectedError) {
    console.log("logging the error", error);
    alert("An unexpected error occured");
  }

  return Promise.reject(error);
});

export default instance;
