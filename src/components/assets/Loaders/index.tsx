import { Skeleton } from "@mui/material";

interface IProps {
    width: number,
    height: number,
    variant: "text" | "rectangular" | "rounded" | "circular"
}

export default function CustomSkeleton(props:IProps){
    return(
        <Skeleton variant={props.variant || 'rectangular'} width={props.width || 500} height={props.height || 500} />
    )
}


