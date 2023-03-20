import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        Accept: "application/json",
        "Content-Type": "aplication/json"
    }
})

export default http