import axios from "axios";
const fetch = axios.create({
  baseURL: "http://212.64.75.109/",
  timeout: 20000,
});
fetch.interceptors.request.use((config) => {
  console.log("请求中..");

  return config;
});
fetch.interceptors.response.use((res) => {
  console.log("接受响应..");

  return res;
});
class rq {
  static fetchGet(url, params) {
    return new Promise((resolve, reject) => {
      fetch({
        method: "get",
        params,
        url,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }
}
export default rq;
