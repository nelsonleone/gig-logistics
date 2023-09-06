import Geocode from 'react-geocode'

interface ICoords {
    lat?: number,
    lng?: number
}

export default function getCoords(location:string){

    let coords : ICoords = {}

    Geocode.setLanguage("en")
    Geocode.setRegion('ng')
    Geocode.setLocationType("ROOFTOP")

    if(process.env.NODE_ENV === "development"){
        Geocode.enableDebug()
    }

    Geocode.fromAddress("Eiffel Tower").then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          coords.lat = lat;
          coords.lng = lng;
          
        },
        (error) => {
          console.error(error)
        }
    )

    return coords;
}