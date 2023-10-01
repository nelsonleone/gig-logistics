export const customDlRTComponent = {
    block: {
        normal({ children }: any){
            return <p className="my-4 lg:my-7">{children}</p>
        }
    }
}


export const customCPRTComponent = {
    block: {
        normal({ children }: any){
            return <p className="my-4 lg:my-9">{children}</p>
        }
    }
}