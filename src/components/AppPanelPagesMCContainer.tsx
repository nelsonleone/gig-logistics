import { ReactNode } from 'react'

export default function AppPanelMCContainer({ children, className }: { children:ReactNode, className?:string}){
    return(
        <div className={`my-10 bg-white shadow-lg rounded-lg py-4 px-6 min-h-[20em] text-[#4b5563] ${className}`}>{children}</div>
    )
}