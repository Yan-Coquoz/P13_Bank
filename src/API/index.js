import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001/api/v1/",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
