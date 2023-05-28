import axios from "axios";

let baseApiUrl = "https://thinroot-ecom-api.onrender.com/api";
// let baseApiUrl = "http://localhost:8000/api";

export const publicRequest = axios.create({
    baseURL: baseApiUrl
})