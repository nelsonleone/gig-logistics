import { Skeleton } from "@mui/material";

export default function Loading(){
    return(
        <div className="h-screen pt-28 pb-4 px-8 flex flex-col justify-between items-center gap-8 lg:flex-row overflow-hidden">
            <Skeleton
                variant="rectangular"
                animation="pulse"
                className="w-full h-[20em] lg:w-[60%] lg:h-[80%]"
            />
            <Skeleton
                variant="rectangular"
                animation="pulse"
                className="w-full h-[20em] lg:w-[35%] lg:h-[80%]"
            />
        </div>
    )
}