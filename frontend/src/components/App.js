import React, { Component } from "react";
import { render } from "react-dom";
import TestModule from "./test";
import Room from "./room";
import { Button } from "@material-ui/core";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import RoomJoinPage from "./joinroom";
import Home from "./home";
import RoomCreatePage from "./createroom.js"
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  const theme = createMuiTheme({
    overrides: {
      MuiPaper: {
        root: {
          padding: '30px',
          marginBottom: '30px',
          height: 140,
          width: 90,
        },
      },
    }
  });

export default class App extends Component{
    state = {
        loading: true,
        roomsdata: null,
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
        return<MuiThemeProvider theme={theme}><div>
         <Router>
          <Switch>
          <Route path="/join/:roomcode/" render={(props) => <Room {...props}/>}> 
          </Route>
          <Route path="/join" render={(props) => <RoomJoinPage {...props}/>}>
          </Route>
          <Route path="/create">
            <RoomCreatePage />
          </Route>
          
          <Route path="/">
            <Home/>
            </Route>
        </Switch>
        </Router>
            </div>
            </MuiThemeProvider>
        
     
    }
}
const appContainer = document.getElementById("app");
render(<App />, appContainer);
