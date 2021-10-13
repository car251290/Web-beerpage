import React from 'react';
import '../styles/style.css'



const Beers =({beers}) => {
  return(
      
      <li key={beers.id}> 
      <h3>{beers.name}</h3>
      <h5> {beers.website_url}</h5>
    </li>
    
  )
}

export default Beers;
