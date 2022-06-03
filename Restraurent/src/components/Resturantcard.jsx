import React from 'react'
import "./Resturant.css"

const Resturantcard = ({data}) => {
    // console.log(data);

    const cash = data.payment_methods.cash;
    const card = data.payment_methods.card;
    const upi = data.payment_methods.upi;
    
    return (
        <div className='container'>
           <div className='box1'>
               <div className='imgdiv'><img src={data.img}/></div>
               <div className='middlebox'>
                   <h2 className='name'>{data.name}</h2>
                   <p className='cuisines'>{data.Cuisines.join(", ")}</p>
                   <p className='cost'>Cost for one ₹{data.Cost_for_two}</p>
                   <div className='time'>
                       <p>Min ₹{data.min}</p>
                       <p>- Up to {data.deliverytime} min</p>
                   </div>
                   <div className='payment'>
                   {cash && card && upi ? (
                       <p>Accepts : cash , card , upi</p>
                   ) : cash && card ? (
                       <p>Accepts : cash , card</p>
                   ) : cash && upi ? (
                       <p>Accepts : cash , upi</p>
                   ) : card && upi ? (
                       <p>Accepts : upi , card</p>
                   ) : cash ? (
                       <p>Accepts : cash</p>
                   ) : card ? (
                       <p>Accepts : card</p>
                   ) : (
                       <p>Accepts : upi</p>
                   ) }
                   </div>
               </div>
               <div className='rightbox'>
                   <p className='rating'>{data.rating}</p>
                   <p className='votes'>{data.votes} votes</p>
                   <p className='reviews'>{data.reviews} reviews</p>
               </div>
           </div>
           <div className='box2'>Order Online</div>
        </div>
    )
}

export default Resturantcard