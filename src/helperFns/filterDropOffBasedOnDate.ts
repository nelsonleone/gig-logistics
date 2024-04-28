import { Dayjs } from "dayjs";
import { SavedDropOffs } from "../../types";

export function filterDropOffsBasedOnDate(startDate: Dayjs | null | undefined, endDate: Dayjs | null | undefined,dropOffs:SavedDropOffs[]){

    const startTimestamp = startDate?.valueOf()
    const endTimestamp = endDate?.valueOf()

    if(startTimestamp && endTimestamp){
        // Filter items based on the date range
        const filteredItems = dropOffs.filter((item) => {
        const itemTimestamp = new Date(item.createdAt).getTime()
            return itemTimestamp >= startTimestamp && itemTimestamp <= endTimestamp;
        })

        return filteredItems;

    }else{
        return dropOffs;
    }
}