import React, { useEffect, useState } from 'react'

const Timer = ({start,end}) => {
    
    // const [timerid,setTimerId]=useState(null)
    const [timer,setTimer]=useState(start)

useEffect(()=>{

    let id=setInterval(()=>{
        if(timer==end){ 
            clearInterval(id);
        }
        else{

        setTimer((prev)=>prev+1);
        }
    },1000)
    // setTimerId(id)

return ()=>{
  
    clearInterval(id);
};

},[timer])

return (
    <h1><div> Count Down:{timer}</div></h1>


) 
};

export default Timer;

