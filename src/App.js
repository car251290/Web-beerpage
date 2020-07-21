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
              <h1 className="beer-name">

              <li key={beer.id}>
             <h3>{beer.name}</h3>
              <p>{beer.description}</p>
              </li>
              </h1>
            
          </div>
        
      )}
      
  </div>
 
    );
}



export default App;