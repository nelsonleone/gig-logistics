function MainWalletComponent() {
    return(
        <div className="my-10">
            <h2 className="text-2xl lg:text-3xl mt-4 font-bold mb-8 text-[#374151] text-center">Fund your wallet to enjoy seamless transactions from start to finish</h2>

            <div 
               className="bg-[url('/images/cardbg.svg')] bg-cover bg-right bg-no-repeat rounded-3xl bg-black min-h-[12em] lg:min-h-[17em] text-[#FFFFFF] lg:w-[58%] lg:mx-auto"
               >
                <div className="px-8 pt-8 flex flex-col gap-4 lg:gap-8">
                    <p id="avl_blnc" className="font-medium">Available balance</p>
                    <strong aria-labelledby="avl_blnc" className="font-bold text-2xl lg:text-5xl">$0</strong>
                    <button className="rounded-full bg-[#FFFFFF] p-3 text-black w-36 lg:text-lg">Fund wallet</button>
                </div>
            </div>
        </div>
    )
}

export default MainWalletComponent;