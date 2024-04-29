export default function WalletCard(){
    return(
        <div 
            className="bg-[url('/images/cardbg.svg')] bg-cover bg-right bg-no-repeat rounded-3xl bg-base-color2 min-h-[13em] md:min-h-[19em] text-[#FFFFFF] md:w-[35em] md:mx-auto"
            >
            <div className="px-8 pt-12 flex flex-col">
                <p id="avl_blnc" className="font-medium">Available balance</p>
                <strong aria-labelledby="avl_blnc" className="font-bold text-4xl md:text-5xl block my-4">0</strong>
                <button className="rounded-full bg-[#FFFFFF] p-3 text-base-color2 w-36 lg:text-lg">Fund wallet</button>
            </div>
        </div>
    )
}