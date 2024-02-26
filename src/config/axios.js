import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_REACT_APP_API_BASEURL || "http://localhost:5000",
  paramsSerializer: (params) => qs.stringify(params),
});

export default instance;
