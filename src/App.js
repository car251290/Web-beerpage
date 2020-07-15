import './App.css';
import { fetchBeer } from './api/fetchbeer';
import React, { useState } from 'react';
import IconBeer from './IconBeer';


const App = () => {
  const [query, setQuery] = useState('');
  const [Beer, setBeer] = useState({});
  
  const search = async (e) => {
      if(e.key === 'Enter') {
          const data = await fetchBeer(query);

          setBeer(data);
          setQuery('');
      }
 
 
    }

    return( 
        
    <div className="main-container">
        <div>
      <IconBeer/>
      </div>
      <input type="text"className="search" placeholder="Search..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
      {Beer.main && (
          <div className="beer">
              <h2 className="beer-name">
                  <span>{Beer.name}</span>
                  <sup>{Beer.sys.type}</sup>
              </h2>
              <div className="beer-temp">
                  {Math.round(Beer.main.type)}
                  <sup>&deg;C</sup>
              </div>
              <IconBeer/>
          </div>
        
      )}
      
  </div>
 
    );
}



export default App;