import React, { useState,useEffect,Component } from 'react';
import {fetchBeer} from './api/index';
import { render } from 'react-dom';
import Header from './componets/Header/header';
import axios from 'axios';
import Beers from './componets/Beer/beers';
import './App.css'

const App = () => {
    const [beers, setbeers] = useState([])

useEffect((beers)=>{
  setbeers({beers})
},[beers])
  
    return (
      <div className= 'main-container'>
        <Header />
        <Beers beers={setbeers}/>
      </div>
    );  
}

render(<App />, document.getElementById('root'));

export default App;

