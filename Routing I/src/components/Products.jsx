import React from 'react'
import "./Products.css"
import { useState, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'


const Products = () => {

    const navigate = useNavigate()

    const handlechange = (id) => {

        navigate(`/products/${id}`)
    }

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            let res = await fetch("http://localhost:8080/products")
            let data = await res.json()
            setProducts(data)

        };
        fetchProducts()
    }, [])

    return (
        <div><h1>Products:{""}</h1>


            {products.map((el) => {
                return (

                    <div key={el.id} >
                        <p> Product Name : {el.name}</p>
                        <p> Price : {el.price}</p>

                        {/* <Link to={`/products/${el.id}`}>{el.name}</Link> */}

                        {<button onClick={() => { handlechange(el.id) }}>More Details </button>}

                        {/* <Link to={`/products/${el.id}`}>{el.price}</Link> */}
                    </div>

                )
            })
            }

            <Outlet />





        </div>
    )
}

export default Products