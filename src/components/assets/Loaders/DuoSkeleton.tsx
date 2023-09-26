import CustomSkeleton from ".";

export default function DuoSkeleton(){
    return(
        <div className="mb-2 flex flex-col items-center justify-between lg:items-start lg:flex-row  h-screen w-full">
           <CustomSkeleton className="w-full lg:w-[45%] h-[35%] lg:h-4/5" variant="rectangular" />
           <CustomSkeleton className="w-full lg:w-[50%] h-[60%] lg:h-[90%]" variant="rectangular" /> 
        </div>
    )
}