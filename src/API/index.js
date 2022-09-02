import axios from "axios";

const api = axios.create({ baseURL: "http://locahost:3001" });
export default api;
