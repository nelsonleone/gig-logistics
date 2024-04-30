import ReportIssueForm from "@/components/ReportIssueForm";
import { roboto_slab } from "../fonts";

export default function ReportIssuesPage(){
    return(
        <main className="page px-0 text-primary">
           <div className="bg-[url('/images/offices_bg.svg')] py-20 w-full">
                <h1 className={`${roboto_slab.className} font-bold text-4xl mb-4 text-center mx-auto`}>Report an Issue</h1>
           </div>
           <ReportIssueForm />
        </main>
    )
}