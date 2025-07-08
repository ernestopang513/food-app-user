import { isAxiosError } from "axios"
import { log } from "../../config/loggers/logger"
import { foodAppApi } from "../../config/api/foodAppApi";
import { DishImagesResponse } from "../../infrastructure/interfaces/DishImages.response";




export const getAllDishes = async(): Promise<DishImagesResponse[]> => {
    try {
        const {data} = await foodAppApi.get('/dish');
        return data
    } catch (error) {
        if(isAxiosError(error)) {
            log(error.response?.data, '/n' , 'getAllDishes - linea 11')
        }
        throw new Error(`Error obteniendo platillos`);
    }
}