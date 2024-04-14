import { BaseUrl } from "./BaseUrl";

export const GetScheduledVehicles = `${BaseUrl}/vehicle/get/scheduled?serviceAdvisorId=`;

export const GetServicedVehicles = `${BaseUrl}/vehicle/get/serviced?serviceAdvisorId=`;

export const GetUnderServicingVehicles = `${BaseUrl}/vehicle/all/underServicing`;
