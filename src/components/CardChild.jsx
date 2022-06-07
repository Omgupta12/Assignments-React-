import React from 'react'

const CardChild = (props) => {

    const bgcolor={
        background:props.color
    }
  return (
    <>
  
    <div style={bgcolor}>  
        <p>{props.date}</p>

        <img src={props.logo}/>

<button>{props.btn}</button>

<h1>{props.heading}</h1>

<h1>{props.subheading}</h1>

<h4>{props.devices}</h4>

<h2><i class="fa-solid fa-arrow-right"></i></h2>
    </div>
    
    </>
  )
}

export default CardChild;