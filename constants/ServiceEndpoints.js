import { BaseUrl } from "./BaseUrl";


export const PostStartService = `${BaseUrl}/service/startService?vehicleNumber=`;

export const PostCompleteService = `${BaseUrl}/service/completeService?vehicleNumber=`;

export const GetAllItems = `${BaseUrl}/item/get/all`;

export const PostAddItem = `${BaseUrl}/item/add`;