import React from 'react';
import {Card, CardMedia, CardContent, CardActions, } from '@material-ui/core';

const Beers =({beers}) => {


  return( 
       
    <div className="main-container">
        <div>
      </div>
      {Beers.main && (
          <div className="beer">
              <h1 className="beer-name">
              <li key={beers.id}>
             <h3>{beers.name}</h3>
              <p>{beers.country}</p>
              </li>
              </h1>
          </div>
        
      )}
      
  </div>
 
    );
}

export default Beers;