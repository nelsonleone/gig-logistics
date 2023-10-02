export const customCPRTComponent = {
    block: {
        normal({ children }: any){
            return <p className="my-4 lg:my-9">{children}</p>
        },
        h2({ children }:any){
            return <h2 className="text-2xl font-semibold">{children}</h2>
        }
    }
}


export const customDlRTComponent = {
    block: {
        ...customCPRTComponent.block,
        normal({ children }: any){
            return <p className="my-4 lg:my-7">{children}</p>
        }
    }
}

