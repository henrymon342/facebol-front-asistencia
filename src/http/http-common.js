import axios from "axios";

export default axios.create({
  baseURL: "https://asist.facebolsrl.com/public/api/v1",
  headers: {
    "Content-type": "application/json"
  }
});