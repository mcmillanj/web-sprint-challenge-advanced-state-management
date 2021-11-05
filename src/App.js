import React, { Component } from "react";
import {connect} from 'react-redux'
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { fetchSmurfs} from './actions'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import axios from 'axios';


class App extends Component {
componentDidMount(){
  this.props.fetchSmurfs();
  console.log("component mounted");
 
//  axios.get('http://localhost:3333/smurfs')	   
//  .then(res => console.log(res))	
//  .catch(error => console.log('Error', error));	
 }  






  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

 export default connect(null,{fetchSmurfs})(App);


//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.