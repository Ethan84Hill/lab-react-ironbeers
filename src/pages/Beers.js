import beers from "../assets/beers.png"
import { NavLink } from 'react-router-dom'
import axios from "axios";
import { useState, useEffect } from 'react'
import BeerDetails from "./BeerDetails";
import { Routes, Route } from "react-router-dom";

function Beers() {

    const [beersList, setBeersList] = useState([])

    useEffect(() => {                                
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
          .then((response) => {
            console.log('response.data', response.data);
            setBeersList(response.data)
          })
          .catch((err) => console.log(err))
      }, [] ); 

    return(
        <div>
            <NavLink to="/">
                    <button>Home</button>
            </NavLink>
            <h1>All Beers</h1>
            <img src={beers} alt="beers" />
            {beersList.map((singleBeer) => (
            <div key={singleBeer._id}>
                <img src={singleBeer.image_url} alt="beer" />
                <h3>{singleBeer.name}</h3>
                <p>Tagline: "{singleBeer.tagline}"</p>
                <p>Created by: "{singleBeer.contributed_by}"</p>
                <NavLink to={`/beers/${singleBeer._id}`}>
                    <button>Details</button>
                </NavLink>
                <hr />
            </div>
            ))}
             
        </div>
    ) 
}

export default Beers;