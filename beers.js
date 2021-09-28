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
//class Beers extends Component {

 // render() {
    //const items = this.props.beers.map((beer) => {
      //return (
      //  <li key={beer.id}>
      //    <h3>{beer.name}</h3>
      //    <h5> {beer.website_url}</h5>
      //    <h4>{beer.images}</h4>
      //    <p>{beer.description}</p>
      //  </li>
     // )
    //});

   // return (
    //  <ul>
    //    {items}
    //  </ul>
    //);
 // }
//}

export default Beers;