import axios from "axios";
import axiosRetry from 'axios-retry';

const instance = axios.create({
  baseURL: "",
  timeout: 5000,
});

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // console.log("[error]", error);
    // Toast("网络走丢了～，请稍后再试");
    return Promise.resolve(error);
  }
);

axiosRetry(instance, { retries: 3 });

export default instance;
