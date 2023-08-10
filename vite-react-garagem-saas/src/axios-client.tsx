import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`, // Use the variable to construct the base URL
});

axiosClient.interceptors.request.use(async (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
        "ACCESS_TOKEN"
    )}`;
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;
        if (response.status === 401) {
            localStorage.removeItem("ACCESS_TOKEN");
            window.location.href = "/login";
        }

        throw error;
    }
);

export default axiosClient;
