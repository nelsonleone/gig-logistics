import Link from "next/link";

export default function Logo(){
    return(
        <Link href="/" className="w-20">
            <img src="/images/logo.png" alt="logo" />
        </Link>
    )
}