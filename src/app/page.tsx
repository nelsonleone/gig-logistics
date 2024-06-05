import CompanyGoals from "@/components/CompanyGoals";
import GiggoAppAdBanner from "@/components/GiggoAppAdBanner";
import TrackerArea from "@/components/TrackerArea";
import FeaturedEventBanner from "@/components/FeaturedEventBanner";
import CustomSkeleton from "@/components/assets/Loaders";
import ServicesHighlight from "@/components/ServicesHighlight";
import { Suspense } from "react"; 
import { roboto_slab } from "./fonts";
import TruckVideo from "../../public/videos/intro-bg-video.mp4"
 
export default function Home() {
 
  return (
    <main className="page overflow-hidden px-0 pt-[85vh]">
      <Suspense fallback={<CustomSkeleton variant="rectangular"  className="bg-gray-500 w-full h-16 absolute z-20 top-[10rem] lg:top-[6rem]" />}>
        <FeaturedEventBanner />
      </Suspense>
      <div 
        className="absolute w-screen h-[110vh] md:h-screen overflow-hidden brightness-[25%] top-16 bg-slate-900 after:absolute after:w-full after:h-full after:left-0 after:top-0 after:block after:opacity-10 after:m-auto after:bg-slate-200"
        > 
        <video className="w-full absolute h-[110vh] md:h-screen top-0 bottom-0 left-0 right-0 m-auto object-cover" src={TruckVideo} autoPlay loop muted controls={false} />
      </div>

      <div className="relative w-[92.5%] lg:w-[93.5%] m-auto">
        <div 
          className="absolute -top-[34.5em] lg:-top-[39.5em] left-0 right-0  text-base-color1 flex align-middle gap-2 flex-col m-auto  md:w-[60%] md:m-0 lg:ms-0 lg:me-auto lg:w-1/2">
          <h1 className={`${roboto_slab.className} w-11/12 md:w-5/6 leading-tight font-medium text-3xl my-3 lg:text-4xl`}>Delivering Excellence Beyond Boundaries</h1>
          <p className="text-base lg:leading-8">
            At GIGL, we redefine the art of logistics. With a seamless blend of precision and innovation, we propel your ecommerce business to new horizons. Our commitment to excellence knows no bounds, whether across cities or continents.
          </p>
        </div>

        <ServicesHighlight />
        <GiggoAppAdBanner />
        <TrackerArea />
        <CompanyGoals />
      </div>
    </main>
  )
}
