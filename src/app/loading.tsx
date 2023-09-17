export default function Loading(){
    return(
        <div className="h-screen py-8 flex justify-center items-center gap-1">
            <img src="/images/truck-loader.svg" alt="loading" className="w-[12em] aspect-auto animate-pulse" />
        </div>
    )
}