import { foodAppApi } from "../../config/api/foodAppApi";
import { FoodStand } from "../../infrastructure/interfaces/FoodStand.response";



export const getAllFoodStands = async(): Promise<FoodStand[]> => {

    try {
        const {data} = await foodAppApi.get<FoodStand[]>(`/food-stands`);

        // const foodStands = data
        //     .map(FoodStandMapper.foodStantResponseToEntity)
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('Error getting food stands')
    }

}