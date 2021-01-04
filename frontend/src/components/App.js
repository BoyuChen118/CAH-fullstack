import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component{
    state = {
        loading: true,
        roomsdata: null,
    }

    async componentDidMount(){
        const url = "http://127.0.0.1:8000/api/rooms";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            roomsdata: data.results[1].code,
            loading: false,
        });
    }
    render(){
        return<div>
        <h1>
            Welcome to Cards Against Humanity</h1>
            <button type="button"></button>
            {this.state.loading ? <div>loading..</div> : <div>{this.state.roomsdata}</div>}
            </div>
            
     
    }
}
const appContainer = document.getElementById("app");
render(<App />, appContainer);
