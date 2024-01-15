import { ICategoryValue, LabelValueObj } from "../../types";

export function setDropOffItemWeight(category:ICategoryValue,item:string) : LabelValueObj {
    if(category === "computer accessories" || category === "phones"){
        return [
            {
                label: "0.0-1.5",
                value: "0.0-1.5"
            }
        ]
    }

    else if(category === "documents" || category === "electronics" || category === "jewelries/accessories"){
        return [
            {
                label: "0.0-1.0",
                value: "0.0-1.0"
            }
        ]
    }

    else if(item ===  "other-food-stuffs"){
        return [
            {
                label: "0.0-4.0",
                value: "0.0-4.0"
            },
            {
                label: "4.0-10.0",
                value: "4.0-10.0"
            },
            {
                label: "10.0-15.0",
                value: "10.0-15.0"
            },
            {
                label: "15.0-20.0",
                value: "15.0-20.0"
            },
            {
                label: "20.0-25.0",
                value: "20.0-25.0"
            },
            {
                label: "25.0-30.0",
                value: "25.0-30.0"
            },
            {
                label: "30.0-35.0",
                value: "30.0-35.0"
            }
        ]
    }

    else if(category === "food"){
        return [
            {
                label: "12.5",
                value: "12.5"
            },
            {
                label: "25.0",
                value: "25.0"
            },
            {
                label: "50.0",
                value: "50.0"
            }
        ]
    }

    else if(category === "health products"){
        return [
            {
                label: "1.0",
                value: "1.0"
            }
        ]
    }

    else{
        return [
            {
                label: "0.0-1.0",
                value: "0.0-1.0"
            }
        ]
    }
}