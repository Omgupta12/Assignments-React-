import React from 'react'
import { useState } from 'react';
import data from "./data.json"
import Resturantcard from './Resturantcard';


const Restaurantdetails = (props) => {

    let filterdata = data;
    // console.log(data);
    const [rating , setRating] = useState("")
    const [payment , setPayment] = useState("")
    const [cost , setCost] = useState("")
    // console.log(rating);

    if(rating) {
        filterdata = data.filter(e => {
            if(rating === "All"){
                return e
            }
            else{
            return e.rating >= rating
            }
        })
    }else if(payment){
        filterdata = data.filter(e => {
            if(payment === "cash"){
                return e.payment_methods.cash
            }
            else if(payment === "card"){
                return e.payment_methods.card
            }
            else if(payment === "upi"){
                 return e.payment_methods.upi
            }
            else{
                return e
            }
        })
    }else if(cost){
        filterdata = data.sort((a,b) => {
            if(cost === "Asc"){
                return a.Cost_for_two - b.Cost_for_two
            }
            else if(cost === "Dsc"){
                return b.Cost_for_two - a.Cost_for_two
            }
        })
    }
    
    // console.log(filterdata);
    
    return (
        <div>
           <h1>Restaurant App</h1>
           <div>
               <select name="rating" id="" onChange={(e) => {
                   setRating(e.target.value)}}>
                   <option value="">Ratings</option>
                   <option value="1">1 Star</option>
                   <option value="2">2 Star</option>
                   <option value="3">3 Star</option>
                   <option value="4">4 Star</option>
                   <option value="All">ALL</option>
               </select>
           </div>
           <div>
               <select name="Payment_Methods" id="" onChange={(e) => {
                   setPayment(e.target.value)
               }}>
                   <option value="">Payment Methods</option>
                   <option value="cash">Cash</option>
                   <option value="card">Card</option>
                   <option value="upi">Upi</option>
                   <option value="All">ALL</option>
               </select>
           </div>
           <div>
               <select name="Cost" id="" onChange={(e) => {
                   setCost(e.target.value)
               }}>
                   <option value="">Cost</option>
                   <option value="Asc">Ascending</option>
                   <option value="Dsc">Decending</option>
               </select>
           </div>
           {filterdata.map(e => {
               return <Resturantcard key={e.id} data={e}/>
           })}
        </div>
    )
}

export default Restaurantdetails