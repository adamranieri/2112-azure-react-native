

export default function LocationInfo(){

    const streetAddress = '496 peacemaker drive'
    const zipCode = 55555

    return(<>
        {/* curly brackets allows us to interpolate JS into our JSX */}
        <h3>Address {streetAddress}</h3> 
        <h3>Zip code {zipCode}</h3>
    </>)
}