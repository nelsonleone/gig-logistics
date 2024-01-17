import Image from "next/image";

export default function LoadingEllipse({ styles }: { styles?:string }){
    return(
        <Image src="/icons/loading-ellipse.svg" priority width={50} height={50} loading="eager" aria-label="loading"  alt="" className={`top-0 bottom-0 w-12 left-0 right-0 block m-auto absolute  ${styles}`} />
    )
}