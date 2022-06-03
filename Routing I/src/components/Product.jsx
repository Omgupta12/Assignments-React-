import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {

const {id}=useParams()
//console.log(id);

const [product, setProduct] = useState({})

useEffect(()=>{
    if(id){
        fetch(`http://localhost:8080/products/${id}`)
        .then((res)=>res.json())
        .then ((data)=> {setProduct(data)
  
        })
    }
},[id])

  return (
    <>
    <div>Product Id:{id}
    <div>{product.name}</div>
    <div>{product.price}</div>
    </div>
    </>
  )
}

export default Product
