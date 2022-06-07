import React from 'react'
import "./Card.css"

const Card = (props) => {

    console.log(props);
    const{logo , date , color , headerLabelTop , subHeader ,devices } = props
    return (
        <div>
            <div className='container'  style={{ backgroundColor:color}}>
            <div className='box1'>
                <p className='ptag'>{date}</p>
                <h2 className='h2tag'>Case Study</h2>
                <h1 className='h1tag'>{headerLabelTop}</h1>
                <h1 className='h1tag'>{subHeader}</h1>
                <p className='ptag'>{devices.join("-")}</p>
            </div>
            <div className='box2'>
                <div>
                    <img src={logo}/>
                </div>
                <div className='imgtag'>
                    <img src='https://img.icons8.com/ios-glyphs/2x/arrow.png'/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Card
