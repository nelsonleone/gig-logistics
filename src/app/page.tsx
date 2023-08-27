export default function Home() {

  return (
    <main className="overflow-hidden">
      <div 
        className="relative w-screen h-screen overflow-hidden brightness-[25%] bg-slate-900"
        >
        <video className="w-full absolute h-screen top-0 bottom-0 left-0 right-0 m-auto object-cover" src="/videos/intro-bg-video.mp4" loop autoPlay muted />
      </div>

      <div 
        className="absolute z-10 top-1/3 left-0 right-0  text-white flex align-middle gap-2 flex-col w-11/12 m-auto">
        <h1 className="w-5/6 leading-tight font-roboto-slab text-3xl mb-3">Delivering Excellence Beyond Boundaries</h1>
        <p className="text-base">
          At GIGL, we redefine the art of logistics. With a seamless blend of precision and innovation, we propel your ecommerce business to new horizons. Our commitment to excellence knows no bounds, whether across cities or continents.
        </p>
      </div>
    </main>
  )
}
