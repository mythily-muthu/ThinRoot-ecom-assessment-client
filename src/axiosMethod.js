import axios from "axios";

let baseApiUrl = "https://thinroot-ecom-api.onrender.com/api";

export const publicRequest = axios.create({
    baseURL: baseApiUrl
})