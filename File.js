import React from "react";
import { useState } from "react";
function Class1(){
    // const colour='white';
    const[colour,setColour]=useState('White')
    return(
        <>
        <h1 className="text-3xl text-center text-cyan-700 ">My Favourite colour is {colour}</h1>
        <button className="bg-blue-500 text-center text-cyan-50 py-1.5  px-1 rounded hover:bg-black hover:text-yellow-300 font-mono" onClick={()=>{setColour('Pink')}}  > Change colour</button>
        
        </>
    )
}
export default Class1;