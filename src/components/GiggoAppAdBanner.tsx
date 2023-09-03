import Image from "next/image";
import Link from "next/link";

export default function GiggoAppAdBanner(){
    return(
        <div 
          className="bg-black w-full text-white rounded-lg px-4 pt-16 pb-20 flex flex-col gap-4 justify-center   md:items-center md:gap-8 lg:gap-4 lg:flex-row lg:px-9 lg:py-20 lg:justify-between"
          >
            <div>
                <p className="text-2xl font-bold my-2 lg:text-[2.25rem] lg:leading-10 lg:w-[60%]">
                GIGGo, the app for local and international shipping
                </p>
                <div className="flex justify-between items-center  gap-4 my-6 md:w-1/2 md:items-center lg:items-start lg:w-[60%]">
                    <Link href="" className="transition duration-200 ease-in-out hover:scale-105">
                        <Image src="/images/app-store.svg" alt="App Store" width={200} height={100} />
                    </Link>
                    <Link href="" className="transition duration-200 ease-in-out hover:scale-105">
                        <Image src="/images/google-play.svg" alt="Google Play" width={200} height={100} />
                    </Link>
                </div>
            </div>
            <div>
                <Image 
                  src="/images/app-image.png"  
                  width={600} height={600} 
                  alt="Giggo App"        
                  placeholder="blur"       
                  blurDataURL="data:image/png;base64,     iVBORw0KGgoAAAANSUhEUgAAAJUAAACVCAYAAABRorhPAAAAAXNSR0IArs4c6QAAAqVJREFUeF7t0kENADAMA7GVP6hC26RhuKcDII+TZ3fvMQXCAgNVWNPVLwAVCHkBqPKkDqFiIC8AVZ7UIVQM5AWgypM6hIqBvABUeVKHUDGQF4AqT+oQKgbyAlDlSR1CxUBeAKo8qUOoGMgLQJUndQgVA3kBqPKkDqFiIC8AVZ7UIVQM5AWgypM6hIqBvABUeVKHUDGQF4AqT+oQKgbyAlDlSR1CxUBeAKo8qUOoGMgLQJUndQgVA3kBqPKkDqFiIC8AVZ7UIVQM5AWgypM6hIqBvABUeVKHUDGQF4AqT+oQKgbyAlDlSR1CxUBeAKo8qUOoGMgLQJUndQgVA3kBqPKkDqFiIC8AVZ7UIVQM5AWgypM6hIqBvABUeVKHUDGQF4AqT+oQKgbyAlDlSR1CxUBeAKo8qUOoGMgLQJUndQgVA3kBqPKkDqFiIC8AVZ7UIVQM5AWgypM6hIqBvABUeVKHUDGQF4AqT+oQKgbyAlDlSR1CxUBeAKo8qUOoGMgLQJUndQgVA3kBqPKkDqFiIC8AVZ7UIVQM5AWgypM6hIqBvABUeVKHUDGQF4AqT+oQKgbyAlDlSR1CxUBeAKo8qUOoGMgLQJUndQgVA3kBqPKkDqFiIC8AVZ7UIVQM5AWgypM6hIqBvABUeVKHUDGQF4AqT+oQKgbyAlDlSR1CxUBeAKo8qUOoGMgLQJUndQgVA3kBqPKkDqFiIC8AVZ7UIVQM5AWgypM6hIqBvABUeVKHUDGQF4AqT+oQKgbyAlDlSR1CxUBeAKo8qUOoGMgLQJUndQgVA3kBqPKkDqFiIC8AVZ7UIVQM5AWgypM6hIqBvABUeVKHUDGQF4AqT     +oQKgbyAlDlSR1CxUBeAKo8qUOoGMgLQJUndQgVA3kBqPKkDqFiIC/wANDc4pHGN3TqAAAAAElFTkSuQmCC" 
                />
            </div>
        </div>
    )
}