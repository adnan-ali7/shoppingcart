import React, { useEffect, useState } from 'react'

function Cart({cart}) {
    const [CART, setCART] = useState([]);
    useEffect(()=>{
        setCART(cart)
    }, [cart])

    const handleRemove = (cartIndex) => {
        const updatedCart = CART.filter((_, index) => index !== cartIndex);
        setCART(updatedCart);
    };
  return (
    <div>
        {
            CART?.map((cartItem, cartIndex) =>{
                return(
                    <div key={cartIndex} className='cart-box'>
                        <img className='cart-img' src={cartItem.image} width={40}/>
                        <button className='btn' onClick={()=>{
                            const _CART = CART.map((item,index)=>{
                                return cartIndex === index ? {...item, quantity: item.quantity > 0 ? item.quantity -1 : 0} : item
                            })
                            setCART(_CART)
                        }}>-</button>
                        <span className='qunatity'>{cartItem.quantity}</span>
                        <button  className='btn' onClick={()=>{
                            const _CART = CART.map((item,index)=>{
                                return cartIndex === index ? {...item, quantity: item.quantity + 1} : item
                            })
                            setCART(_CART)
                        }}>+</button>
                        <span className='price'>{Math.round(cartItem.price * cartItem.quantity)}</span>
                        <button className='remove-btn' onClick={() => handleRemove(cartIndex)}>Remove</button>
                    </div>
                )
            })
        }
        <p className='total-price'> Total Price : 
            {
               Math.round(CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0))
            }
        </p>
    </div>
  )
}

export default Cart