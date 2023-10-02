import { CPDedicatedServices, domesticLogisticsDedicatedServices, ecommerceLogisticsDedicatedServices } from "@/componentsData/dedicated-services-card-data";
import { PT_ServiceName } from "@/enums";

export default function renderServiceCardsData(serviceName:PT_ServiceName){
    const serviceCardsData = 
    serviceName === PT_ServiceName.corporateLogistics ? CPDedicatedServices 
    :
    serviceName === PT_ServiceName.domesticLogistics ? domesticLogisticsDedicatedServices 
    :
    serviceName === PT_ServiceName.ecommerceLogistics ? ecommerceLogisticsDedicatedServices
    :
    [];

    return serviceCardsData;
}