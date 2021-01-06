import React, { Component } from "react";
import { render } from "react-dom";
import TestModule from "./test";
import Room from "./room";
import { Button } from "@material-ui/core";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import RoomJoinPage from "./joinroom";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";


export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            roomsdata: null,
            redirect: null,
        }
        this.join = this.join.bind(this);
        this.create = this.create.bind(this);
    }
    

    join(){
        this.setState({redirect: "/join"});
    }
    create(){
        this.setState({redirect: "/create"});
    }

    // async componentDidMount(){
    //     const url = "http://127.0.0.1:8000/api/rooms";
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     this.setState({
    //         roomsdata: data.results[1].code,
    //         loading: false,
    //     });
    // }
    render(){
        if (this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }


        return<div>
        <div><h1>
            Welcome to Cards Against Humanity</h1></div>
            {/* {this.state.loading ? <div>loading..</div> : <div>{this.state.roomsdata}</div>} */}
            <div class="buttons" style={{justifyContent: 'center'}}>
            <ButtonGroup size="small" aria-label="small outlined button group">
                <Button
            type="submit"
            variant="contained"
            color="default"
            onClick={this.join}
          >
            Join Room
          </Button>
          <Button
            type="submit"
            halfWidth
            variant="outlined"
            color="default"
            onClick={this.create}
          >
            Create Room
          </Button>
          </ButtonGroup>
          </div>
     
            </div>
        
     
    }
}