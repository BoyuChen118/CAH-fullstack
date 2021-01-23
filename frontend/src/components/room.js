import React, { Component } from "react";
import { render } from "react-dom";
import TestModule from "./test";
import { Button } from "@material-ui/core";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import axios from 'axios';
import ListItem from '@material-ui/core/ListItem';

export default class Room extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            roomsdata: null, // roomcode
            redirect: null,
            players: [],    // reference to every player in the room
            roomurl: null,  //room reference
            names: [],   // name of every player
        }

    }
    


    async componentDidMount(){
        const roomcode = window.location.pathname.slice(-6);
        if (this.props.location.state){
            this.setState({
                roomurl: this.props.location.state.roomurl
            });
        }
       

        
        
        // for (d of data){
        //     // iterate through room data and find the room with the url code
        //     console.log("bruh");
        // }
        this.setState({
            roomsdata: roomcode,
            loading: false,
        });

        this.interval = setInterval(() => { 
            var n = [];  
            axios.get(this.state.roomurl).then( response =>{
                var p = response.data['players'];
                this.setState({ 
                    players:[...p] 
                });

                for(var i=0; i<p.length; i++){  // async cannot be done with for each
                    axios.get(p[i]).then(response=>{
                      n.push(response.data['displayName']);
                    }
                        )
                }

                this.setState({
                    names: n        // cannot modify state directly , needs temp array
                });
                
            }
            )
            },3000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        
        const namelist  = this.state.names.map((n) => {
        <li>{n}</li>
    });
    const bruh = <p>bruh</p>
        return<div id="home2">
        <div style={{justifyContent: 'center'}}><h1>
            Waiting for players...</h1></div>
            {this.state.loading && this.state.names.length > 1000 ? <div>loading..</div> : <div
            >RoomCode: {this.state.roomsdata}
            <div>
            {/* {this.state.names.map(person => (
        <p>{person}</p>
      ))} */}{
          namelist
      }
            </div>
            </div>}
            <div class="buttons" style={{justifyContent: 'center'}}>
            
          </div>
     
            </div>
        
     
    }
}