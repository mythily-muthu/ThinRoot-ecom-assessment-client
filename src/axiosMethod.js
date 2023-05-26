import axios from "axios";

let baseApiUrl = "http://localhost:8000/api";

export const publicRequest = axios.create({
    baseURL: baseApiUrl
})