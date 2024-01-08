import { officeLocationDataObj } from "@/componentsData/officeLocationData"
import { LabelValueObj } from "../../types";

export function getXpressDropOffLocationData(){
    const locationDataArr : LabelValueObj = []

    for(let i = 0; i < officeLocationDataObj.nigeriaOfficeLocationData.locations.length; i++){
        locationDataArr.push({
            label: officeLocationDataObj.nigeriaOfficeLocationData.locations[i].state_capital.toUpperCase(),
            value: officeLocationDataObj.nigeriaOfficeLocationData.locations[i].state_capital.toLowerCase()
        })
    }
    for(let i = 0; i < officeLocationDataObj.ghanaOfficeLocationData.locations.length; i++){
        locationDataArr.push({
            label: officeLocationDataObj.nigeriaOfficeLocationData.locations[i].state_capital.toUpperCase(),
            value: officeLocationDataObj.nigeriaOfficeLocationData.locations[i].state_capital.toLowerCase()
        })
    }

    return locationDataArr;
}