import React, { Component } from 'react';
import axios from 'axios';
import {Button, Icon, Pagination, Table, Card, Row, Col} from 'react-materialize';

class FullGame extends Component{
    
    constructor(){
        super();
        this.state={
            game:null,
        } 
    }
        
        componentDidMount=()=> {
            //fetching games details
            axios.get("https://deepak2607.github.io/Numerator_jsondata.json").then(response=>{
                
                const games= response.data; 
                console.log(this.props.match.params.id);
                const game= games.filter(game=> {
                    return this.props.match.params.id==game.Rank;
                })
                    
                console.log(game);
                this.setState({
                    game:game[0]
                });
                console.log(this.state.game);        
            })
        }
  
        
    render(){ 
        
        let content= <h4>loading...</h4>;
        if(this.state.game){
            content= (
                <div style={{marginTop:"50px"}}>
                <Row>
                  <Col m={6} s={4}></Col>
                
                  <Col m={6} s={4}>
                    <Card className='white' closeIcon={<Icon>close</Icon>}
                      revealIcon={<Icon>more_vert</Icon>} textClassName="black-text"
                      title= "Game Details">
                      <Table>  
                          <tbody>
                            <tr>
                              <th>Rank</th>
                              <td></td>
                              <td>{this.state.game.Rank}</td>
                            </tr>
                            <tr>
                              <th>Name</th>
                              <td></td>
                              <td>{this.state.game.Name}</td>
                            </tr>
                            <tr>
                              <th>Platform</th>
                              <td></td>
                              <td>{this.state.game.Platform}</td>
                            </tr>
                            <tr>
                              <th>Year</th>
                              <td></td>
                              <td>{this.state.game.Year}</td>
                            </tr>
                            <tr>
                              <th>Genre</th>
                              <td></td>
                              <td>{this.state.game.Genre}</td>
                            </tr>
                            <tr>
                              <th>Publisher</th>
                              <td></td>
                              <td>{this.state.game.Publisher}</td>
                            </tr>
                            <tr>
                              <th>Global Sales</th>
                              <td></td>
                              <td>{this.state.game.Global_Sales}</td>
                            </tr>
                          </tbody>
                        </Table>
                    </Card>
                  </Col>
                
                  <Col m={6} s={4}></Col>
                </Row>
                </div>
            )
        }
        
            return(  
                <div className="container-fluid">
                {content}
                </div>
            );
     }     
}

export default FullGame;
