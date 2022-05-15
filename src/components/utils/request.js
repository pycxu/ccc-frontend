import axios from "axios"

axios.defaults.headers.post['Content-Type'] = "application/json";
const request = axios.create({
  baseURL: "http://localhost:8000/api/v1"}
)

export default request;