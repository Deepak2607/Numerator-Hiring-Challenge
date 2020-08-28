import React, { Component } from 'react';
import axios from 'axios';
import Game from "./Game";
import Navbarr from "../Navbar/Navbar";
import {Button, Icon, Pagination, Table} from 'react-materialize';

class Games extends Component{
    
    constructor(){
        super();
        
        this.state={
            games:[],
            filteredGames:[],
            query: '',
            activePage:1,
            hover:false
        } 
    }
        
        componentDidMount=()=> {
            //fetching games details
            axios.get("https://deepak2607.github.io/Numerator_jsondata.json").then(response=>{
                
                const games= response.data; 
                console.log(games);
                        
                this.setState({
                    games:games,
                    filteredGames:games
                });
            })
        }
    
        
        //function to handle change in search bar of games
        handleInputChange =(event)=> {
            
            let query= event.target.value;
            let filteredData = this.state.games.filter(game => {
                return game.Name.toLowerCase().includes(query.toLowerCase());
            });
            
            console.log(filteredData.length);
            this.setState({
                query:query,
                filteredGames:filteredData
            })
        }
        
        handleInputChange2 =(value)=> {
            
            let query= value;
            let filteredData = this.state.games.filter(game => {
                return game.Name.toLowerCase().includes(query.toLowerCase());
            });
            
            console.log(filteredData.length);
            this.setState({
                query:query,
                filteredGames:filteredData
            })
        }
        
 
        //sorting the games based on year (in ascending order)
        sortByYearAsc=()=>{
              
              let sortedGames;
              sortedGames= this.state.filteredGames.sort((a,b)=>{
                 return parseInt(a.Year)  - parseInt(b.Year);
              })
              
              this.setState({
                  filteredGames:sortedGames
              })
          }
          
        //sorting the games based on year (in descending order)
          sortByYearDsc=()=>{
              
              let sortedGames;
              sortedGames= this.state.filteredGames.sort((a,b)=>{
                 return parseInt(b.Year)  - parseInt(a.Year);
              })
              
              this.setState({
                  filteredGames:sortedGames
              })
          }
          
          //sorting the games based on rank (in ascending order)
          sortByRankAsc=()=>{
              
              let sortedGames;
              sortedGames= this.state.filteredGames.sort((a,b)=>{
                 return parseInt(a.Rank)  - parseInt(b.Rank);
              })
              
              this.setState({
                  filteredGames:sortedGames
              })
          }
          
          //sorting the games based on rank (in descending order)
          sortByRankDsc=()=>{
              
              let sortedGames;
              sortedGames= this.state.filteredGames.sort((a,b)=>{
                 return parseInt(b.Rank)  - parseInt(a.Rank);
              })
              
              this.setState({
                  filteredGames:sortedGames
              })
          }
         
          //this function is called when an element(a game) is clicked
          onClick=(id)=> {
              this.props.history.push(`/${id}`);
          }
          
          toggleHover=()=>{
            this.setState({hover: !this.state.hover})
          }
          
          
    render(){ 
        
            return(  
                <div className="container-fluid">
                <Navbarr filteredGames={this.state.filteredGames} query= {this.state.query} handleInputChange={this.handleInputChange}/>  
                <Table>
                  <thead>
                    <tr>
                        <th>Rank 
                        <span style={{marginLeft:"5px"}}>
                          <Button node="a" small style={{color:"white"}} waves="light" onClick={this.sortByRankDsc}>↑</Button>
                          <Button node="a" small style={{color:"white"}} waves="light" onClick={this.sortByRankAsc}>↓</Button>
                        </span>
                        </th>

                        <th>Name</th>
                        <th>Platform</th>

                        <th>Year
                        <span style={{marginLeft:"5px"}}>
                          <Button node="a" small style={{color:"white"}} waves="light" onClick={this.sortByYearDsc}>↑</Button>
                          <Button node="a" small style={{color:"white"}} waves="light" onClick={this.sortByYearAsc}>↓</Button>
                        </span>
                        </th>

                        <th>Genre</th>
                        <th>Publisher</th>
                        <th>Global Sales</th>

                      </tr>
                  </thead>
                
                   <tbody>
                    {this.state.filteredGames.slice(((this.state.activePage-1) * 8), ((this.state.activePage-1) * 8) + 8).map(game =>
                      <Game onClick={()=>this.onClick(game.Rank)} key={game.Rank} id={game.Rank} rank={game.Rank} name={game.Name} platform={game.Platform} year={game.Year} genre={game.Genre} publisher={game.Publisher} global_sales={game.Global_Sales} /> )}
                    </tbody>
                </Table>
                       
                <br/>                     
                <Pagination
                  activePage={this.state.activePage}
                  items={Math.ceil(this.state.filteredGames.length/8) }
                  onSelect={(activePage)=> {
                      this.setState({
                          activePage:activePage
                      })
                  }}       
                  leftBtn={<Icon>chevron_left</Icon>}
                  maxButtons={8}
                  rightBtn={<Icon>chevron_right</Icon>}
                />  

                </div>
            );
     }     
}

export default Games;
