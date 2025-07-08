import { isAxiosError } from "axios";
import { foodAppApi } from "../../config/api/foodAppApi";
import { DeliveryPointOrderResponse } from "../../infrastructure/interfaces/DeliveryPint.response";
import { log } from "../../config/loggers/logger";

export const getAllDeliveryPoints = async(): Promise<DeliveryPointOrderResponse[]> => {
    try {
        const {data} = await foodAppApi.get('/delivery-point')
        return data
    } catch (error) {
        if (isAxiosError(error)) {
            log(error.response?.data, '/n', 'getAllDeliveryPoints - linea 9')
        }
        throw new Error(`Error obteniendo puntos de entrega`);
    }
}