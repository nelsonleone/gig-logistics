"use client"

import { memo } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { BiSolidMessageAltError } from "react-icons/bi"
import LoadingEllipse from "./assets/Loaders/LoadingEllipse"
import { inter } from "@/app/fonts"
import { useAppDispatch, useAppSelector } from "@/redux/customHooks"
import { setShowSnackbar } from "@/redux/slices/snackbarSlice"
import { AlertSeverity } from "@/enums"
import CustomImageUpload from "./assets/inputs/Filepond/CustomImageUpload"

function ReportIssueForm(){

    const { control, formState: { errors, isSubmitting }, handleSubmit, setValue, reset } = useForm<{ issue: string, issueScreenshot: string }>()
    const { email } = useAppSelector(store => store.authUser)
    const dispatch = useAppDispatch()

    const handleSubmitIssue : SubmitHandler<{ issue: string, issueScreenshot: string }> = async({ issue, issueScreenshot }) => {
        try{
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/send_report_mail`,{
                method: "POST",
                body: JSON.stringify({
                    userEmail: email,
                    reportScreenshot: issueScreenshot,
                    userReport: issue
                })
            })

            if(!res.ok){
                const { error } = await res.json()
                throw new Error(error)
                return;
            }

            dispatch(setShowSnackbar({
                mssg: "Your report was sent successfully",
                severity: AlertSeverity.SUCCESS
            }))
            
            reset()
        }

        catch(err:unknown|any){
            dispatch(setShowSnackbar({
                mssg: err.message,
                severity: AlertSeverity.ERROR
            }))
        }
    }

    return(
        <form className={`${inter.className} py-8 px-4 md:px-8 text-primary bg-base-color1 rounded-lg my-8 md:mt-12 md:w-[30em] md:mx-auto`} onSubmit={handleSubmit(handleSubmitIssue)}>
            <div className="mb-5">
                <label htmlFor="user-report" className="block mb-3">Issue</label>
                <Controller
                   name="issue"
                   control={control}
                   rules={{ required: "Please describe your issue", minLength: { value: 10, message: "Description is too short"}}}
                   render={({ field }) => (
                    <textarea className="w-full h-36 mx-auto bg-gray-50 top-0 left-0 pe-14 border border-gray-300 rounded-lg focus:outline-offset-0 focus:outline focus:outline-2 focus:border-none focus:outline-black" id="user-report" {...field} placeholder="Describe your issue" />
                   )}
                />
                {
                    errors.issue?.message &&
                    <p role="alert" className="text-primary2 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{errors.issue.message}</p>
                }
            </div>

            <CustomImageUpload name="issueScreenshot" setValue={setValue} label="Upload Screenshot - Optional" />
            
            <button disabled={isSubmitting} className="relative min-h-[3.6em] text-center w-full md:w-96 bg-base-color2 text-base-color1 font-medium rounded-md my-8 md:my-10 mx-auto block">
                {
                    isSubmitting ?
                    <LoadingEllipse />
                    :
                    "Submit"
                }
            </button>
        </form>
    )
}

export default memo(ReportIssueForm)