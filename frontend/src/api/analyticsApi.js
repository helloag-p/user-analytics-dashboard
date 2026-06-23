import axios from "axios";

const analyticsApi = axios.create({

    baseURL: "http://localhost:5000/api",

});

export const getSessions = async () => {

    const response = await analyticsApi.get("/sessions");

    return response.data.data;

};

export default analyticsApi;