import { Skeleton } from "@mui/material";

interface IProps {
    className: string,
    variant: "text" | "rectangular" | "rounded" | "circular"
}

export default function CustomSkeleton(props:IProps){
    return(
        <Skeleton variant={props.variant || 'rectangular'} className={props.className} />
    )
}


