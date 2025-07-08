// import { API_URL, API_URL_ANDROID, API_URL_IOS, STAGE } from "@env";
import axios from "axios";
import { Platform } from "react-native";
import { SecureStorageAdapter } from "../helpers/adpters/secure-storage.adapter";
// import { StorageAdapter } from "../adapters/storage-adapter";

export const API_URL_LOCAL = 
    (process.env.EXPO_PUBLIC_STAGE === 'prod')
        ? process.env.EXPO_PUBLIC_API_URL
        : Platform.OS === 'ios'
            ? process.env.EXPO_PUBLIC_API_URL_IOS
            : process.env.EXPO_PUBLIC_API_URL_ANDROID;


const foodAppApi = axios.create({
    baseURL: API_URL_LOCAL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 3000,
})


// Interceptors
foodAppApi.interceptors.request.use(
    async (config) => {
        const token = await SecureStorageAdapter.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    }
)

// Se exporta de esta forma para asegurar que los interceptores se cargan

export {
    foodAppApi,
}