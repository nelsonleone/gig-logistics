export default function LoadingEllipse({ styles }: { styles:string }){
    return(
        <img src="/icons/loading-ellipse.svg" alt="loading" className={`top-0 bottom-0 w-12 left-0 right-0 block m-auto absolute  ${styles}`} />
    )
}