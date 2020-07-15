import React from 'react';
import './App.css';

const IconBeer = (props) => {

    return(
        <div>
             <img className='icon-beer' src= {require('./image/beer-icon.jpg')}  alt='iconbeer'/> 
        </div>
      
    );
}

export default IconBeer