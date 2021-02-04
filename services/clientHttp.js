import Axios from "axios";

const clientHttp = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export { clientHttp };
