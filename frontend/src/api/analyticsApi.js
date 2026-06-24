import axios from "axios";

const analyticsApi = axios.create({

    baseURL: import.meta.env.VITE_API_URL,

});

export const getSessions = async () => {

    const response = await analyticsApi.get("/sessions");

    return response.data.data;

};

export const getSessionEvents = async (sessionId) => {

    const response = await analyticsApi.get(

        `/sessions/${sessionId}/events`

    );

    return response.data.data;

};
export const getHeatmapData = async (pageUrl) => {

    const response = await analyticsApi.get(

        `/heatmap?pageUrl=${encodeURIComponent(pageUrl)}`

    );

    return response.data.data;

};
export default analyticsApi;