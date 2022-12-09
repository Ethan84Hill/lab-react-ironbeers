import { NavLink } from 'react-router-dom'

import { Routes, Route } from "react-router-dom";

import Beers from './Beers';
import NewBeer from './NewBeer';
import RandomBeer from './RandomBeer';
import BeerDetails from './BeerDetails';

function HomePage() {
    return(
        <div>
            <nav>
                <NavLink to="/beers">
                    <button>List of Beers</button>
                </NavLink>
              
                <NavLink to="/random-beer">
                    <button>Get Random Beer</button>
                </NavLink>
        
                <NavLink to="/new-beer">
                    <button>Add a New Beer</button>
                </NavLink>
            </nav>
        
            <div>
            </div>
        </div> 
    )

}

export default HomePage;