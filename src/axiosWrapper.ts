import axios from "axios";

const axiosWrapper = axios.create();
axiosWrapper.defaults.headers["X-Api-Key"] =
  "9YFNNKS31u9gCFKPetPWdAAjEXnED0B3K18AeYgg";

export default axiosWrapper;
