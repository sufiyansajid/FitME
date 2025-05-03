import React  from 'react'
import { useParams } from 'react-router-dom'

const Cart = () => {
    const { title} = useParams()
    

    return (
        <div className='text-center m-5 '>
            <h2 className='text-primary'>Your Cart</h2>

            <p>THE PRODUCT IS ADDED TO CART IS: </p> <p className="text-primary" >{title}</p>
        </div>
    )
}

export default Cart;