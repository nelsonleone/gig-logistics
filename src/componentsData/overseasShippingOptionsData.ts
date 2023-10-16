import { GiNigeria } from "react-icons/gi";
import { DataWithHTI } from "../../types";
import { FaPlaneDeparture } from "react-icons/fa";

export const overseasShippingOptionsData : DataWithHTI[] = [
    {
        title: "Send To Nigeria",
        text: "Import your packages from the UK and the USA and we deliver straight to your door step",
        icon: GiNigeria
    },
    {
        title: "Send Abroad",
        text: "Send items from Nigeria to over 230 countries and territories world wide",
        icon: FaPlaneDeparture
    }
]