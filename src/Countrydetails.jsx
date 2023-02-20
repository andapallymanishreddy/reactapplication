
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Countrydetails() {
    const res = useParams();
    console.log(res);
    const [cDetails, setDetails] = useState([])
    useEffect(() => {
        if (res.cname) {
            axios.get(`https://restcountries.com/v2/name/${res.cname}`).then((response) => {
                console.log(response.data);
                setDetails([...response.data])
            })
        }
    }, [res.cname])

    return (
        <div className="border border-4 border-info m-2 p-2">
            <h1>{res.cname} details</h1>
            {
                cDetails[0] && (<div>
                    <h4>Capital: {cDetails[0].capital}</h4>
                    <h4>Population: {cDetails[0].population} </h4>
                    <h4>Region: {cDetails[0].region} </h4>
                    <img src={cDetails[0].flag} width='20%' alt="" />
                </div>)
            }

        </div>
    )
}
export default Countrydetails;