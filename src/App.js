import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import RandomBeer from './pages/RandomBeer';
import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails';

function App() {
  return (
    <div className="App">
            <Routes>
                <Route path="/beers" element={<Beers />} />
                <Route path="/random-beer" element={<RandomBeer />} />
                <Route path="/new-beer" element={<NewBeer />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/beers/:beerId" element={<BeerDetails />} />
            </Routes>
    </div>
  );
}

export default App;
