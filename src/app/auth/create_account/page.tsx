import SignUpMainCP from "@/components/auth_pages/SignUpMainCP";

export default function SignUp(){

    return(
        <div className="relative mt-14 bg-[url('/images/red-truck-bg.jpg')] flex justify-center items-center bg-no-repeat bg-center bg-cover">
            <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
            <SignUpMainCP />
        </div>
    )
}