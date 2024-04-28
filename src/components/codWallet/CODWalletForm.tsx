import { codWalletInputFormData } from "@/componentsData/codWalletFormInputData";
import { ICODWalletFormValues } from "../../../types";
import AppPanelMCContainer from "../AppPanelPagesMCContainer";
import { Control, FieldErrors, UseFormHandleSubmit, Controller } from 'react-hook-form'
import CustomTextInput from "../assets/inputs/CustomTextInput";
import BackBtn from "../assets/BackBtn";
import CustomPhoneInput from "../assets/inputs/CustomPhoneInput";
import CustomQuotePageSelect from "../assets/inputs/CustomQuotePageSelect";
import LoadingEllipse from "../assets/Loaders/LoadingEllipse";
import { useAppDispatch } from "@/redux/customHooks";
import { setShowSnackbar } from "@/redux/slices/snackbarSlice";
import { AlertSeverity, COD_wallet_input_names } from "@/enums";
import { memo } from "react";

interface IProps {
    control: Control<ICODWalletFormValues,any>,
    handleSubmit: UseFormHandleSubmit<ICODWalletFormValues, undefined>,
    errors: FieldErrors<ICODWalletFormValues>,
    isSubmitting: boolean
}
async function CODWalletForm(props:IProps){

    const { control, handleSubmit, errors } = props;
    const dispatch = useAppDispatch()

    const handleCreateCodWallet = async() => {
        dispatch(setShowSnackbar({
            mssg: 'Your COD wallet is being processed',
            severity: AlertSeverity.SUCCESS
        }))
    }

    return(
        <AppPanelMCContainer className="relative lg:pt-24">
            <BackBtn className="font-semibold" />

            <h2 className="font-bold mb-4 text-xl text-center my-6 lg:mb-8 capitalize lg:text-2xl">Create COD Wallet</h2>
            <form onSubmit={handleSubmit(handleCreateCodWallet)} className="mt-6 flex justify-center flex-col text-[#6B7280] md:w-1/2 md:mx-auto">
                {
                    codWalletInputFormData.map((val) => {
                        return val.name === COD_wallet_input_names.phoneNumber ?
                        <CustomPhoneInput className="h-[3.2em]" id="cod-phoneInput" label="Phone Number:" control={control} name={val.name} />
                        :
                        val.name === COD_wallet_input_names.gender ?
                        <div className="my-8">
                            <CustomQuotePageSelect
                                id="cod-wallet-form-gender"
                                control={control} 
                                name="gender"
                                hasError={errors.gender?.message ? true : false}
                                required='Please enter your gender' 
                                data={[{ value: "male", label: "Male"}, { value: "female", label: "Female"}]}
                                placeholder="Filter by status"
                                optionStyles={{ height: "2em"}}
                                selectStyles={{ height: '3.2em'}}
                            />
                        </div>
                        :
                        val.name !== COD_wallet_input_names.gender && val.name !== COD_wallet_input_names.phoneNumber ?
                        <CustomTextInput 
                           id={`cod-${val.name}`}
                           required="This Field Is Required"
                           inputType={val.name === COD_wallet_input_names.email ? "email" : "text"} 
                           control={control} 
                           placeholder="" 
                           label={val.label}
                           name={val.name as keyof ICODWalletFormValues}
                           error={errors[val.name as keyof ICODWalletFormValues]?.message} 
                           labelStyles="mb-4"       
                           inputStyles="w-full z-20 border border-gray-400 rounded-lg p-3 h-[3.2em] cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-2 focus:outline-black"
                        />
                        :
                        null
                    })
                }
                <button className="relative block rounded-md text-base-color1 bg-base-color2 font-medium p-4 text-center mx-auto w-full md:w-[20em] my-16 hover:opacity-90">
                    {
                        props.isSubmitting ?
                        <LoadingEllipse />
                        :
                        "Create Account"
                    }
                </button>
            </form>
        </AppPanelMCContainer>
    )
}


export default memo(CODWalletForm)