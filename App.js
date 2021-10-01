import React, { useState,useEffect,Component } from 'react';
//import {getBeerData} from './api/index';
import { render } from 'react-dom';
import Header from './componets/header';
import axios from 'axios';
import Beers from './componets/beers';
import './styles/style.css';
import './App.css'

//class App extends Component {
  //constructor() {
    //super();

    //this.state = {
      //beers: []
    //}
  //}
const App = () => {
    const [beers, setbeers] = useState([])


  //'https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries',
  //' https://api.punkapi.com/v2/beers'

 
  const fetchBeers = async(beers) => {
    const response = await axios.get('https://api.openbrewerydb.org/breweries');
      setbeers (response.data);

      //setAdvice('advice');
      //this.setState({advice});
      setbeers({beers});

    
}
useEffect((beers)=>{
  fetchBeers({beers})
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
