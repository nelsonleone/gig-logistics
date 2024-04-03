import Image from "next/image";

interface IProps {
    className: string,
    handleClick: () => void,
    disabled: boolean
}

export default function ContinueWithGoogleBtn({ className, handleClick, disabled }:IProps){
    return(
        <button disabled={disabled} type="button" className={`disabled:cursor-not-allowed disabled:brightness-75 w-full rounded-md p-3 h-[3.2em] bg-cyan-950 text-center text-base-color1 my-4 flex gap-2 justify-center items-center ${className}`} onClick={handleClick}>
            <Image src="/icons/google-icon.png" priority loading="eager" alt="Google" width={40} height={40} />
            <span>Continue With Google</span>
        </button>
    )
}