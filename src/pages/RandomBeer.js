import random from '../assets/random-beer.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function RandomBeer() {

const [randomBeer, setRandomBeer] = useState({})

useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => {
        console.log('response.data', response.data);
        setRandomBeer(response.data[Math.floor(Math.random() * response.data.length)])
      })
      .catch((err) => console.log(err))
}, []);

    return (
        <div>
            <NavLink to="/">
                    <button>Home</button>
            </NavLink>
            <h1>Here's Your Random Beer</h1>
            <img src={random} alt="random" />
            
        <div>
        <img src={randomBeer.image_url} alt = 'beer'/>
            <h3>{randomBeer.name}</h3>
            <p>Tagline: "{randomBeer.tagline}"</p>
            <p>First Brewed: {randomBeer.first_brewed}</p>
            <p>Attenuation Level: {randomBeer.attenuation_level}</p>
            <p>Description: {randomBeer.description}</p>
            <p>Contributed By: "{randomBeer.contributed_by}"</p>
        </div>

        </div>
    )
}

export default RandomBeer;