import { deliveryVehiclesData } from "@/componentsData/delivery-vehicles-data";

function ShipNowPageMainContent() {
    return (
        <div className="my-8 bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold text-center">Please select the most suitable vehicle to pick up your item(s)</h2>
            <div className="w-[95%] mx-auto">
                {
                    deliveryVehiclesData.map(val => {
                        return(
                            <div key={val.vehicleName} tabIndex={0} className="shadow-xl rounded-lg p-4 flex flex-col justify-center items-center mb-10">
                               {val.icon({ styling: "", ariaLabel: "Motor Bike"})} 
                               <h3 className="text-xl font-medium my-4 capitalize">{val.vehicleName}</h3>
                               <p className="text-center">{val.vehicleDescription}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShipNowPageMainContent;