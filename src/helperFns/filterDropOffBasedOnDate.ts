import { SavedDropOffs } from "../../types";

export function filterDropOffsBasedOnDate(startDate: Date|null, endDate: Date|null,dropOffs:SavedDropOffs[]){

    const startTimestamp = startDate?.getTime()
    const endTimestamp = endDate?.getTime()

    if(startTimestamp && endTimestamp){
        // Filter items based on the date range
        const filteredItems = dropOffs.filter((item) => {
        const itemTimestamp = new Date(item.timestamp).getTime()
        console.log(itemTimestamp,startTimestamp,endTimestamp)
            return itemTimestamp >= startTimestamp && itemTimestamp <= endTimestamp;
        })

        return filteredItems;

    }else{
        return dropOffs;
    }
}