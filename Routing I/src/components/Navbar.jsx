import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
// const navigate=useNavigate()

// const handlechange=(id)=>{
// if(id===1)
// navigate("/products/1")
// }


    return (
        <div>
            <Link to="/">Home</Link>

            <Link to="/products">Products</Link>
            <br />
            <br />
{/* <button onClick={()=>handlechange(1)}>More Details </button> */}
{/* <button onClick={()=>handlechange(1)}>go to product 1  </button> */}
        </div>
    )
}

export default Navbar