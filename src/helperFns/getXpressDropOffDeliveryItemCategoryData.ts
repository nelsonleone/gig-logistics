import { xpressDropOffFullCatergoryData } from "@/componentsData/xressDropOffDeliveryItemsData";
import { LabelValueObj } from "../../types";

export function getXpressDropOffDeliveryItemCategoryData() : LabelValueObj{
    const resultArr = xpressDropOffFullCatergoryData.map(val => {
        return {
            value: val.value,
            label: val.label
        }
    })

    return resultArr;
}


export function getXpressDropOffDeliveryItemCategoryItems(category:string) : LabelValueObj {

    let resultArr : LabelValueObj = []

    for(const val of xpressDropOffFullCatergoryData){
        if(category === val.value){
            resultArr = [...val.items]
        }
    }
    return resultArr;
}