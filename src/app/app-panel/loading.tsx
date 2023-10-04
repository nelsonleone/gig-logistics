import CustomSkeleton from "@/components/assets/Loaders";

export default function AppPanelLoader(){
    return(
        <div className="mb-2 flex flex-col items-center justify-between lg:items-start lg:flex-row h-[80vh] w-full">
           <CustomSkeleton className="w-full lg:w-[30%] h-[35%] lg:h-[45%] rounded-lg" variant="rectangular" />
           <CustomSkeleton className="w-full lg:w-[68%] h-[60%] lg:h-[80%] rounded-lg" variant="rectangular" /> 
        </div>
    )
}