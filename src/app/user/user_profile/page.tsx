import AuthUserDetailsEditForm from "@/components/profilePage/AuthUserDetailsEditForm";
import { roboto_slab } from "../../fonts";
import PasswordUpdateSection from "@/components/profilePage/PasswordUpdateSection";

export default function MyProfile(){
    return( 
        <section className="page text-primary py-8">
            <h1 className="AT_only">User Profile</h1>

            <div className="md:w-[38em] lg:w-2/5 md:mx-auto md:mt-8">
                <div>
                    <h4 className={`${roboto_slab.className} mt-6 mb-4 font-bold text-2xl`}>Edit Profile</h4>
                    <AuthUserDetailsEditForm />
                </div>
                <PasswordUpdateSection />
            </div>
        </section>
    )
}