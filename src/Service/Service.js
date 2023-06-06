import axios from "axios";

export const httpRequest = (url, method, body) => {
  let tempData = { method, url, data: body, responseType: "json" };
  return axios(tempData);
};
