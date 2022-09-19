import axios from "axios";

/* Création d'une nouvelle instance d'axios avec la baseURL, les en-têtes et le délai d'attente. */
export default axios.create({
  baseURL: "http://localhost:3001/api/v1/",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
  timeout: 2500,
});
