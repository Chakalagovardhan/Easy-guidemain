import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://localhost:8080",
    headers:{
        "Content-Type":"application/json"
    }
});


const axiosInstanceDsaSageFrontend="http//localhost:5174";


export default axiosInstance;

export{
    axiosInstanceDsaSageFrontend
};