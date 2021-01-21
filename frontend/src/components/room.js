import React, { Component } from "react";
import { render } from "react-dom";
import TestModule from "./test";
import { Button } from "@material-ui/core";
import ButtonGroup from '@material-ui/core/ButtonGroup';


export default class Room extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            roomsdata: null,
            redirect: null,
        }

    }
    


    async componentDidMount(){
        const url = "http://127.0.0.1:8000/CAH/rooms";
        const response = await fetch(url);
        const data = await response.json();
        const roomcode = window.location.pathname.slice(-6);
        
        // for (d of data){
        //     // iterate through room data and find the room with the url code
        //     console.log("bruh");
        // }
        this.setState({
            roomsdata: roomcode,
            loading: false,
        });
    }
    render(){
        

        return<div>
        <div style={{justifyContent: 'center'}}><h1>
            Waiting for players...</h1></div>
            {this.state.loading ? <div>loading..</div> : <div>{this.state.roomsdata}</div>}
            <div class="buttons" style={{justifyContent: 'center'}}>

          </div>
     
            </div>
        
     
    }
}