import React, { Component } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class RoomJoinPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: "",
      error: "",
    };
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.roomButtonPressed= this.roomButtonPressed(this);
  }

  render() {
    return (
      <Grid container spacing={3} >
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4">
            Join a Room
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <TextField
          label="Enter RoomCode" onChange={this.handleTextFieldChange}/>
          {/* <TextField
          label="Enter Name" onChange={this.handleTextFieldChange}/> */}
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="default"
            onClick={this.roomButtonPressed}
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

  handleTextFieldChange(event) {
    this.setState({
      roomCode: event.target.value,
    });
  }
  async roomButtonPressed(){

  }

}