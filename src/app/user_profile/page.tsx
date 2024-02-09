import AuthUserDetailsEditForm from "@/components/profilePage/AuthUserDetailsEditForm";
import { roboto_slab } from "../fonts";
import PasswordUpdateSection from "@/components/profilePage/PasswordUpdateSection";

export default function MyProfile(){
    return(
        <section className="page text-[#374151] pt-8">
            <h1 className="AT_only">User Profile</h1>

            <div className="md:w-[40] md:mx-auto md:mt-8">
                <div>
                    <h4 className={`${roboto_slab.className} my-4 font-bold text-2xl`}>Edit Profile</h4>
                    <AuthUserDetailsEditForm />
                </div>
                <PasswordUpdateSection />
            </div>
        </section>
    )
}