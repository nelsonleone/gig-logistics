import { officeLocationDataObj } from "@/componentsData/officeLocationData";
import { LabelValueObj } from "../../types";
import XpressDropOffClosetCenterOptionItem from "@/components/XpressDropOffClosetCenterOptionItem";

export function setXpressDropOffClosestGIGLCenter(selectedStateOrCity:string | undefined) {

    let resultArr : LabelValueObj = []
    const normalizedStateOrCityString = selectedStateOrCity?.trim().toLowerCase()

    for (const location of officeLocationDataObj.nigeriaOfficeLocationData.locations) {
        const normalizedState = location.state_capital.toLowerCase()
    
        if (normalizedState === normalizedStateOrCityString) {
            location.address.forEach((val) => {
                resultArr.push({
                    value: val.addressLine,
                    label: `${val.city} => ${val.addressLine}`.toUpperCase()
                })
            })
        }
    }

    for (const location of officeLocationDataObj.ghanaOfficeLocationData.locations) {
        const normalizedState = location.state_capital.toLowerCase()
    
        if (normalizedState === normalizedStateOrCityString) {
            location.address.forEach((val) => {
                resultArr.push({
                    value: val.addressLine,
                    label: `${val.city} => ${val.addressLine}`.toUpperCase()
                })
            })
        }
    }

    return resultArr;
}
