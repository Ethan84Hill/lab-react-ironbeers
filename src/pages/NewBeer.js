import newBeer from '../assets/new-beer.png'
import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import { NavLink } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'

function NewBeer() {

    const [state, setState] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
    })

    const updateState = event => setState({
        ...state,
        [event.target.name]: event.target.value
    })

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name: state.name,
            tagline: state.tagline,
            description: state.description,
            first_brewed: state.first_brewed,
            brewers_tips: state.brewers_tips,
            attenuation_level: Number(state.attenuation_level),
            contributed_by: state.contributed_by
        })
        .then(axiosResponse => {
            console.log(axiosResponse.data)
            navigate('/beers');
        }) 
        .catch(err => console.log(err))
    };

    const navigate = useNavigate();


    return (
        <div>
            <NavLink to="/">
                    <button>Home</button>
            </NavLink>
            <h1>Add A New Beer</h1>
            <img src={newBeer} alt="newbeer" />

            <form onSubmit={handleSubmit} >

            <label>Name: </label>
            <input
                type="text"
                name="name"
                onChange={updateState}
                value={state.name}
            />

            <label>Tagline: </label>
            <input
                type="text"
                name="tagline"
                onChange={updateState}
                value={state.tagline}
            />
    
            <label>Description: </label>
            <input
                type="text"
                name="description"
                onChange={updateState}
                value={state.description}
            />

            <label>First Brewed: </label>
            <input
                type="text"
                name="first_brewed"
                onChange={updateState}
                value={state.first_brewed}
            />

            <label>Brewers Tips: </label>
            <input
                type="text"
                name="brewers_tips"
                onChange={updateState}
                value={state.brewers_tips}
            />
    
            <label>Attenuation Level: </label>
            <input
                type="number"
                name="attenuation_level"
                onChange={updateState}
                value={state.attenuation_level}
            />
            
            <label>Contributed By: </label>
            <input
                type="text"
                name="contributed_by"
                onChange={updateState}
                value={state.contributed_by}
            />

            <button type="submit">Add Beer</button>
        
            </form>


           
        </div>        
    )
}

export default NewBeer;