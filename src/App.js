import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom' ;

import Header from './comps/Header/Header.js' ;
import Home from './comps/Home/Home.js' ;
import './App.css' ;
import Shayari from './comps/Items/Shayari.js' ;
import Quote from './comps/Items/Quote.js' ;
import Dohe from './comps/Items/Dohe.js' ;
import Poem from './comps/Items/Poem.js' ;

class App extends Component {
 
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home} />
            <Route path='/shayari' component={Shayari} />
            <Route path='/quote' component={Quote} />
            <Route path='/dohe' component={Dohe} />
            <Route path='/poem' component={Poem} />

          </div>
        </BrowserRouter>          
      </div>
    );
  }

}

export default App;

// paste after line 14.
