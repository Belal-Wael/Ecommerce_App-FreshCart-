import { createContext, useState } from "react";


export let CounterContext=createContext(0);


export default function CounterContextProvider(props){
   
    let [Counter,setCounter]=useState(0);
    let [UserName,setUserName]=useState('Belal');

    return <CounterContext.Provider value={{Counter,setCounter}}>
              {props.children} 
    </CounterContext.Provider>
}