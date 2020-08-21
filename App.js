import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './componets/header';
import Beers from './componets/beers';

import './styles/style.css';
import './App.css'
import { ScrollView } from "@cantonjs/react-scroll-view";

class App extends Component {
  constructor() {
    super();

    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    fetch(' https://api.punkapi.com/v2/beers').then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      this.setState({
        beers: data
      })
    })
  }

  render() {
    return (
      <div className= 'main-container'>
       <Header />
        <div >
         <ScrollView style={{ height: '100vh' }}>
          <Beers beers={this.state.beers} />
          </ScrollView>
       </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
