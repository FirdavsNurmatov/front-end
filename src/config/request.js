import axios from "axios";

const request = axios.create({ baseURL: import.meta.env.VITE_APP_URL });

request.interceptors.request.use((config) => {
  config.headers["Authorization"] = "Bearer lasjdfjdf;lksdf,kljsdflkk;lkjf;ls";

  return config;
});

request.interceptors.response.use((res) => {
  if (res.status === 401) {
    console.log(res.status);
  }
  return res;
});

export { request };
