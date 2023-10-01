import CompanyGoals from "@/components/CompanyGoals";
import GiggoAppAdBanner from "@/components/GiggoAppAdBanner";
import TrackerArea from "@/components/TrackerArea";
import FeaturedEventBanner from "@/components/FeaturedEventBanner";
import CustomSkeleton from "@/components/assets/Loaders";
import ServicesHighlight from "@/components/ServicesHighlight";
import { Suspense } from "react";
import { roboto_slab } from "./fonts";

export default function Home() {

  return (
    <main className="page overflow-hidden px-0 pt-[85vh]">
      <Suspense fallback={<CustomSkeleton animation="wave" variant="rectangular" className="w-full h-24" />}>
        <FeaturedEventBanner />
      </Suspense>
      <div 
        className="absolute w-screen h-screen overflow-hidden brightness-[25%] top-16 bg-slate-900"
        >
        <video className="w-full absolute h-screen top-0 bottom-0 left-0 right-0 m-auto object-cover" src="/videos/intro-bg-video.mp4" autoPlay loop muted controls={false} />
      </div>

      <div className="relative w-[92.5%] lg:w-[93.5%] m-auto">
        <div 
          className="absolute z-10 -top-[28em] lg:-top-[30em] left-0 right-0  text-white flex align-middle gap-2 flex-col m-auto  md:w-[60%] md:m-0 lg:ms-0 lg:me-auto lg:w-1/2">
          <h1 className={`${roboto_slab.className} w-5/6 leading-tight font-medium text-3xl mb-3 lg:text-4xl`}>Delivering Excellence Beyond Boundaries</h1>
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
