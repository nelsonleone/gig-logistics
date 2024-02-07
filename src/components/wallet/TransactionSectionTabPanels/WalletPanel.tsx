import TabPanelTransactionHistoryTabel from "../TabPanelTransactionHistoryTabel";

export default function WalletPanel({ id }:{ id:string }){

    return(
        <div id={`${id}-panel1`}>
            <h2 className="font-semibold text-xl my-8 text-center">Transaction history</h2>
            <TabPanelTransactionHistoryTabel />
        </div>
    )
}