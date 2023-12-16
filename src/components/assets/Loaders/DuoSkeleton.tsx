import CustomSkeleton from ".";

export default function DuoSkeleton(){
    return(
        <div className="mb-2 flex flex-col items-center justify-between lg:items-start lg:flex-row  h-screen w-full">
           <CustomSkeleton className="w-full md:h-[80%] lg:w-[38%] h-[35%] lg:h-[70%] rounded-lg" variant="rectangular" />
           <CustomSkeleton className="w-full lg:w-[59%] h-[60%] lg:h-[90%] rounded-sm" variant="rectangular" /> 
        </div>
    )
}