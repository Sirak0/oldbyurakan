import React from "react";
import { createStore } from "redux";

const store = createStore(function(state,action){
    if(action.type === "newBook"){
        return{
            book:action.payload
        }
    }
    
 
     return state
 },{
   book:"closed"
 })
 export default store;