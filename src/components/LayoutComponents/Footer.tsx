import Link from "next/link"
import { FaInstagram } from "react-icons/fa"
import { BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs"
import CustomTooltip from "../assets/CustomizedMUI/CustomTooltip"

export default function Footer(){
    return(
        <footer className="bg-[#19191b] bg-[url('/images/footer-bg.2af3a12d.svg')] bg-no-repeat px-4 py-7 bg-blend-hard-light lg:px-[1.5em] lg:flex lg:flex-row lg:justify-center lg:items-baseline lg:gap-28 lg:py-10">
            <p className="text-lg text-white font-bold lg:text-lg">© 2023 GIG Logistics</p>
            <nav className="flex flex-col gap-4 mt-3 text-white lg:flex-row lg:gap-28 lg:justify-between">
                <ul>
                    <li  className="footer-li" aria-hidden="true">Company</li>
                    <li className="footer-li">
                        <Link href="/services-portfolio">Service Portfolio</Link>
                    </li>
                    <li className="footer-li">
                        <Link href="about-us">About Us</Link>
                    </li>
                    <li className="footer-li">
                        <Link href="blog">Blog</Link>
                    </li>
                    <li className="footer-li">
                        <Link href="/terms">Terms and Conditions</Link>
                    </li>
                </ul>

                <ul>
                    <li  className="footer-li" aria-hidden="true">Other Services</li>
                    <li className="footer-li">
                        <Link href="get-a-quote">Get a Quote</Link>
                    </li>
                    <li className="footer-li">
                        <Link href="giggo-actions-tab">Schedule a Pickup</Link>
                    </li>
                    <li className="footer-li">
                        <Link href="https://www.shoponalpha.com">GIG Alpha</Link>
                    </li>
                    <li className="footer-li">
                        <Link href="overseas-shipping">Overseas Shipping</Link>
                    </li>
                    <li className="footer-li">
                        <Link href="report">Report Issues</Link>
                    </li>
                </ul>

                <ul className="flex justify-center items-center gap-1 flex-col lg:justify-start ">
                    <li className="footer-li" aria-hidden="true">Connect With Us</li>
                    <div className="flex gap-4">
                        <li className="footer-li footer-li-with-svg">
                            <CustomTooltip title="Facebook">
                                <Link href="https://facebook.com/giglogistics">
                                    <BsFacebook  />
                                </Link>
                            </CustomTooltip>
                        </li>
                        <li className="footer-li footer-li-with-svg">
                            <CustomTooltip title="Instagram">
                                <Link href="https://instagram.com/giglogistics/">
                                    <FaInstagram />
                                </Link>
                            </CustomTooltip>
                        </li>
                        <li className="footer-li footer-li-with-svg">
                            <CustomTooltip title="Twitter">
                                <Link href="https://twitter.com/giglogistics">
                                    <BsTwitter />
                                </Link>
                            </CustomTooltip>
                        </li>
                        <li className="footer-li footer-li-with-svg">
                            <CustomTooltip title="LinkedIn">
                                <Link href="https://linkedin.com/company/gig-logistics">
                                    <BsLinkedin />
                                </Link>
                            </CustomTooltip>
                        </li>
                    </div>
                </ul>
            </nav>
        </footer>
    )
}