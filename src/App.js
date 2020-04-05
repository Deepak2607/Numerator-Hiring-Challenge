import React, { Component } from 'react';
import Games from './components/Games/Games';
import FullGame from './components/Games/FullGame';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
    
    render () {
        
        return (
            <div> 
            <div className="container-fluid">
            <Switch>
            <Route path="/" exact component={Games} />
            <Route path="/:id" exact component={FullGame} />
            </Switch>
            </div>
            </div>
    );
  }  
}

export default App;