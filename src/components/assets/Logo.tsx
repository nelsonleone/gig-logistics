import Image from "next/image";
import Link from "next/link";

export default function Logo(){
    return(
        <Link href="/" className="ms-8 lg:ms-0">
            <Image src="/images/logo.png" alt="logo" className="w-20 h-auto" priority loading="eager" width={150} height={150} />
        </Link>
    )
} 