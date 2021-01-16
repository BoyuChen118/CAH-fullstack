import React, { Component } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import {Redirect} from "react-router-dom";


export default class RoomJoinPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: "",
      name: "",
      redirect: null,
    };
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.buttonpressed= this.buttonpressed.bind(this);
  }
  buttonpressed(){
    this.setState({
      redirect: `/join/${this.state.roomCode}`,
    });
  }

  handleTextFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    
  }

  render() {
    if(this.state.redirect){
      return <Redirect to={this.state.redirect} />
    }
    return (
      <Grid container spacing={3} >
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4">
            Join a Room
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <TextField
          label="Enter RoomCode"  name="roomCode"  onChange={this.handleTextFieldChange}/>
        </Grid>
        <Grid item xs={12} align="center">
        <TextField
          label="Enter Name" name="name"  onChange={this.handleTextFieldChange}/>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="default"
            type="submit"
            onClick={this.buttonpressed}
          >
            Enter Room
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