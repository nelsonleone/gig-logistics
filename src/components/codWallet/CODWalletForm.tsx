import { codWalletInputFormData } from "@/componentsData/codWalletFormInputData";
import { ICODWalletFormValues } from "../../../types";
import AppPanelMCContainer from "../AppPanelPagesMCContainer";
import { Control, FieldErrors, UseFormHandleSubmit, Controller } from 'react-hook-form'

import CustomTextInput from "../assets/inputs/CustomTextInput";
import { COD_wallet_input_names } from "@/enums";
import CustomBasicSelect from "../assets/inputs/CustomBasicSelect";
import BackBtn from "../assets/BackBtn";
import CustomPhoneInput from "../assets/inputs/CustomPhoneInput";

interface IProps {
    control: Control<ICODWalletFormValues,any>,
    handleSubmit: UseFormHandleSubmit<ICODWalletFormValues, undefined>,
    errors: FieldErrors<ICODWalletFormValues>
}

export default function CODWalletForm(props:IProps){

    const { control, handleSubmit, errors } = props;

    return(
        <AppPanelMCContainer className="relative lg:pt-24">
            <BackBtn className="font-semibold md:left-[26%]" />

            <h2 className="font-bold mb-4 text-xl text-center my-6 lg:mb-8 capitalize lg:text-2xl">Create COD Wallet</h2>
            <form className="mt-6 flex justify-center flex-col text-[#6B7280] md:w-1/2 md:mx-auto">
                {
                    codWalletInputFormData.map((val) => {
                        return val.name === COD_wallet_input_names.phoneNumber ?
                        <CustomPhoneInput className="" id="cod-phoneInput" label="Phone Number:" control={control} name={val.name} />
                        :
                        val.name === COD_wallet_input_names.gender ?
                        <CustomBasicSelect control={control} />
                        :
                        val.name !== COD_wallet_input_names.gender && val.name !== COD_wallet_input_names.phoneNumber ?
                        <CustomTextInput 
                           id={`cod-${val.name}`}
                           required="This Field Is Required"
                           inputType={val.name === COD_wallet_input_names.email ? "email" : "text"} 
                           control={control} placeholder="" 
                           {...val} 
                           name={val.name as keyof ICODWalletFormValues}
                           error={errors[val.name as keyof ICODWalletFormValues]?.message} 
                           labelStyles="cod_form_input_label"
                           inputStyles="border border-gray-300 rounded-md p-3  text-sm w-full lg:p-[.8rem]"
                        />
                        :
                        null
                    })
                }
            </form>
        </AppPanelMCContainer>
    )
}