import axios from "axios";

const axiosWrapper = axios.create();
axiosWrapper.defaults.withCredentials = true;
axiosWrapper.defaults.headers["X-Api-Key"] =
  "9YFNNKS31u9gCFKPetPWdAAjEXnED0B3K18AeYgg";
axiosWrapper.defaults.headers["Content-Type"] = "application/json";
axiosWrapper.defaults.headers["User-Agent"] =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.75 Safari/537.36";
axiosWrapper.defaults.headers["Cache-Control"] = "no-cache";

export default axiosWrapper;
