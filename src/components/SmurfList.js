import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux'
import {fetchSmurfs,isLoading} from './../actions';
import { useEffect } from "react";




       const SmurfList = (props)=> {

        // const isLoading = false;
	    const { fetchSmurfs ,isLoading } = props;
        useEffect(() => {
         fetchSmurfs();
        }, [fetchSmurfs]);
         const testSmurf = { 
             
        id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",	      
        
        name:'Poppa Smurf',	                                                                                                                                        
        position:'Village Leader',	
        nickname: 'Pops',	
        description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'	
    }	
     
       
    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }
    return(    <div className="listContainer">
        <Smurf smurf={testSmurf}/>
        {props.error ? props.error : null}
        {props.smurfs.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf}/>})
                                                       
       }                                                
    
     </div>);
	

 }

 const mapStateToProps = (state) => {
     return{
      ...state,
      smurf:state.smurf,
      isLoading:state.isLoading
         };
};
      

export default connect(mapStateToProps,{fetchSmurfs})(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.