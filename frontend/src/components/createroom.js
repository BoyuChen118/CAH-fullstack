import React, { Component } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from 'axios';

export default class RoomCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: "",
      error: "",
    };
    this.createButtonPressed = this.createButtonPressed.bind(this)
  }
  
async createButtonPressed () {
  const url = "http://127.0.0.1:8000/CAH/create/";
  const payload = {
    "num_rounds":"20"
  }
  axios.post(url,payload).then(response => {
    this.setState({"roomCode":"Complete"})
  })
  
 
}

  render() {
    return (
      <Grid container spacing={3} >
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4">
            Create Room
          </Typography>
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