import Link from "next/link";

export default function CorporateSignUpSection(){
    return(
        <div className="bg-white shadow-xl drop-shadow-sm mx-4 my-8 rounded-md p-4 border border-gray-200">
            <p>
                To Sign up as an Ecommerce merchant, kindly download our mobile app here
                <Link href="https://onelink.to/23hdgg" className="mx-2 font-medium underline"> onelink.to/23hdgg</Link>
                or visit
                <Link href="https://gigl-go.com/" className="mx-2 font-medium underline"> https://gigl-go.com/</Link>
            </p>
        </div>
    )
}