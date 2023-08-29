import FeaturedEventBanner from "@/components/assets/FeaturedEventBanner";
import CustomSkeleton from "@/components/assets/Loaders";
import ServicesHighlight from "@/components/assets/ServicesHighlight";
import { Suspense } from "react";

export default function Home() {

  return (
    <main className="overflow-hidden bg-gray-100">
      <Suspense fallback={<CustomSkeleton width={600} height={40} variant="rectangular" />}>
        <FeaturedEventBanner />
      </Suspense>
      <div 
        className="relative w-screen h-screen overflow-hidden brightness-[25%] top-16 bg-slate-900"
        >
        <video className="w-full absolute h-screen top-0 bottom-0 left-0 right-0 m-auto object-cover" src="/videos/intro-bg-video.mp4" loop autoPlay muted />
      </div>

      <div 
        className="absolute z-10 top-[40%] left-0 right-0  text-white flex align-middle gap-2 flex-col w-11/12 m-auto">
        <h1 className="w-5/6 leading-tight font-roboto-slab text-3xl mb-3">Delivering Excellence Beyond Boundaries</h1>
        <p className="text-base">
          At GIGL, we redefine the art of logistics. With a seamless blend of precision and innovation, we propel your ecommerce business to new horizons. Our commitment to excellence knows no bounds, whether across cities or continents.
        </p>
      </div>

      <ServicesHighlight />
    </main>
  )
}
