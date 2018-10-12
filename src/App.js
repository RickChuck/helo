import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import route from './route';
import Nav from './Component/Nav/Nav'

class App extends Component {
  render() {
    return (
      <div>
     <Switch>
      {route}
      <Nav/>
     </Switch>  
      </div>
    );
  }
}

export default App;
