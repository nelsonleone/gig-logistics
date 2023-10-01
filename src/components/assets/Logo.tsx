import Link from "next/link";

export default function Logo(){
    return(
        <Link href="/" className="ms-8 lg:ms-0">
            <img src="/images/logo.png" alt="logo" className="w-20" />
        </Link>
    )
}