'use client'
 
import { inter, roboto_slab } from './fonts'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className="page relative flex flex-col justify-center items-center bg-black">
      <div className="absolute w-full h-full z-10 m-auto left-0 right-0">
        <h1 className={`${roboto_slab.className} absolute top-1/2 bottom-1/2 left-0 right-0 m-auto text-7xl md:text-9xl lg:text-[13em] text-center font-bold text-red-400 opacity-0 -z-10`}>ERROR</h1>
      </div>
      <div className="text-white z-20">
        <h2 className={`${inter.className} text-center font-semibold text-2xl lg:text-3xl my-4`}>An Error Occurred While Loading This Page</h2>
        <div className="flex justify-between lg:justify-center gap-8 mt-4">
          <button className={`${inter.className} bg-red-500 text-white p-3 text-center rounded cursor-pointer`} onClick={() => reset()}>Try Again</button>
          <button className={`${inter.className} bg-red-500 text-white p-3 text-center rounded cursor-pointer`} onClick={() => router.push("/")}>Go To Homepage</button>
        </div>
      </div>
    </div>
  )   
}