import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://food-sharing-server-seven.vercel.app",
});

export default axiosPublic;
