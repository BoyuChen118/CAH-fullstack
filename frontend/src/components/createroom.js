import React, { Component } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class RoomCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: "",
      error: "",
    };
  }

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4">
            Create Room
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="default"
            onClick={this.roomButtonPressed}
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