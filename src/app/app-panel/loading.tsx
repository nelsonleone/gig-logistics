import CustomSkeleton from "@/components/assets/Loaders";

export default function AppPanelLoader(){
    return(
        <div className="mb-2 mt-10 h-[20em] w-full">
            <CustomSkeleton className="w-full h-full rounded-lg" variant="rectangular" /> 
        </div>
    )
}