import DeliveryPageMC from "@/components/OverseasShippingDetailsTabContent/DeliveryPageMC";
import { redirect } from "next/navigation";

export default function Page({
    params,
    searchParams,
  }: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }){

    const hasItems = searchParams.hasItems === "t" ? true : false;

    if(!hasItems){
      redirect(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/app-panel/overseas-shipping/shipping-details/item-info`)
    }
    return(
        <DeliveryPageMC />

    )
}