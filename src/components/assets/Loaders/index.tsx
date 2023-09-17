import { Skeleton } from "@mui/material";

interface IProps {
    className?: string,
    animation?: "pulse" | "wave"
    variant: "text" | "rectangular" | "rounded" | "circular"
}

export default function CustomSkeleton(props:IProps){
    return(
        <Skeleton animation={props.animation} variant={props.variant || 'rectangular'} className={props.className} />
    )
}


