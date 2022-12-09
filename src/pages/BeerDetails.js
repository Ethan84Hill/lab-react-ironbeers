import axios from "axios";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function BeerDetails() {

    const [beerDetail, setBeerDetail] = useState([])
    let  {beerId} = useParams()

    useEffect(() => {                                
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
          .then((response) => {
            console.log('response.data', response.data);
            setBeerDetail(response.data)
          })
          .catch((err) => console.log(err))
      }, [] ); 
      


    return (
        <div>
        <h1>Beer Facts</h1>
            
            <div key={beerDetail._id}>
                <img src={beerDetail.image_url} alt="beer" />
                <h3>Name: {beerDetail.name}</h3>
                <p>Tagline: "{beerDetail.tagline}"</p>
                <p>First Brewed: "{beerDetail.first_brewed}"</p>
                <p>Attenuation Level: "{beerDetail.attenuation_level}"</p>
                <p>Description: "{beerDetail.description}"</p>
                <p>Created by: "{beerDetail.contributed_by}"</p>
            </div>
            
             
        </div>
    )
}

export default BeerDetails;