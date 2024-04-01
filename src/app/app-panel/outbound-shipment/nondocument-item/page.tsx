import OutBoundShippingNonDocumentItemForm from "@/components/OutBoundShippingNonDocumentItemForm";
import OutBoundShippingItemCategoryPicker from "@/components/assets/Tabs/OutBoundShippingItemCategoryPicker";

export default function NonDocumentItemPage(){
    return(
        <section>
            <h2 className="font-bold text-2xl text-center mx-auto my-8">Item details</h2>

            <OutBoundShippingItemCategoryPicker />
            <OutBoundShippingNonDocumentItemForm />
        </section>
    )
}