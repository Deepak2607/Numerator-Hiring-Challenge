import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Button, Navbar, NavItem, Icon, Autocomplete} from 'react-materialize';
class Navbarr extends Component {
    
    render () {
        
//       const games= this.props.filteredGames.map(game=> {
//           return {name: game.Name};
//       })
//       console.log(games);
        
//        let obj= games.reduce((acc, game) => ({ ...acc, [`${game.name}`]: null }), {});
//        console.log(obj);

        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav"> 
                <form style={{marginLeft:'30px', width:'300px'}}>
                  <input id="form-autocomplete" className="form-control mr-sm-2" type="search" placeholder="Search for games" aria-label="Search" value={this.props.query}
                   onChange={this.props.handleInputChange} />
                </form> 
              </div>
            </nav>
            </div>
    );
  }  
}

export default Navbarr;