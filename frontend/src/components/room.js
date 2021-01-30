import React, { Component } from "react";
import { render } from "react-dom";
import TestModule from "./test";
import { Button, CardContent } from "@material-ui/core";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import axios from 'axios';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

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
            playerurl: null, // reference to current player
            begun: false, // if game has begun
            ended: false  //if game has ended
        }
        this.startgame = this.startgame.bind(this);  // start the gamecycle, (each cycle: give eachg player 7 cards and draw a black card)
    }
    
    async startgame(){
        clearInterval(this.interval);
        this.setState({
            begun: true
        });
        // call deal card api endpoint
        const url = `${this.state.playerurl}deal_cards/`;

        const payload = {
            "num_cards": 10
        };

        var response = await axios.post(url,payload);
        console.log(response.status);

    }
   async loaddata(){
        const roomcode = window.location.pathname.slice(-6);
        if (this.props.location.state){
            this.setState({
                roomurl: this.props.location.state.roomurl,
                playerurl: this.props.location.state.playerurl
            });
        }
        this.setState({
            roomsdata: roomcode,
            loading: false,
        });
            var n = [];  
            axios.get(this.state.roomurl).then(async response =>{
                var p = response.data['players'];
                this.setState({ 
                    players:[...p] 
                });

                for(var i=0; i<p.length; i++){  // async cannot be done with for each
                    var response = await axios.get(p[i]);
                    n.push(response.data['displayName']);
                }
                this.setState( previousState => {
                    return{
                    names: [ ...n],   // cannot modify state directly , needs temp array
                    }     
                });
                console.log(this.state.names);
            }
            )
    }

    async componentDidMount(){
        this.interval = setInterval(() => { 
           this.loaddata()
            },3000);
            this.loaddata();
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        
        const namelist  = this.state.names.map((n) => {
         return <li color="white">{n}</li>
    });
        return<div id="home2">
        <div style={{justifyContent: 'center'}}><h1>
            Waiting for players...</h1></div>
            { this.state.begun ? 
            <div>
            game start
            <Card>
                <CardContent>
                    Word of the day
                </CardContent>
            </Card>
            </div> :
            <div>
            {this.state.loading ? <div>loading..</div> : <div
            >RoomCode: {this.state.roomsdata}
            <div>
                <ol> {namelist}</ol>
            </div>
            <Button variant="contained"
            color="default"
            onClick={this.startgame}>Start Game</Button>
            </div>}
            </div>
            }
            
            
          </div>
     
         
        
     
    }
}