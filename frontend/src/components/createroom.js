import React, { Component } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import {Redirect} from "react-router-dom";
import axios from 'axios';
import { withRouter } from 'react-router'

export default class RoomCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: "",
      error: "",
      redirect: null,
      num_rounds: 40,
    };
    this.createButtonPressed = this.createButtonPressed.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
  }
  
async createButtonPressed () {
  const url = "http://127.0.0.1:8000/api/rooms/";
  const payload = {
    "num_rounds": this.state.num_rounds.toString()
  }
  axios.post(url,payload).then(response => {
    if (response.status == 201){
      this.setState({
        redirect: `/join`,
        roomCode: response.data['code']
      });
      this.props.history.push({
        data: roomCode
      })
    }
  })
  
}

handleTextFieldChange(event){
  this.setState({
    [event.target.name]: event.target.value,
  });
}


  render() {
    if(this.state.redirect){
      return <Redirect to={{
        pathname: this.state.redirect,
        state: {
          roomCode: this.state.roomCode
        }
      }}/>
    }
    return (
        
      <Grid container spacing={3} >
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4">
            Create Room
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
        <TextField
          label="Enter # of rounds" name="num_rounds"  onChange={this.handleTextFieldChange}/>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="default"
            onClick={this.createButtonPressed}
          >
            Create Room
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button variant="contained" color="default" to="/" component={Link}>
            Back
          </Button>
        </Grid>
      </Grid>
      
    );
  }


}