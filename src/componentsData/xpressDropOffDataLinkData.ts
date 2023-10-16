import { DataWithHTI } from "../../types"

interface IXpressDropOffLinkData extends DataWithHTI {
    link: string
}

export const xpressDropOffLinkData : IXpressDropOffLinkData[]  = [
    {
        title: "Create Express Drop-Off",
        text: "Create a new drop-off",
        link: "/create"
    },
    {
        title: "View Xpress Drop-Off",
        text: "View list of drop-off",
        link: "/manage"
    }
]