import React from 'react'

function ProductItem({product, addCart}) {
    
  return (
    <div className='container'>
    {product.map(({ id, price, image }) => (
      <div key={id} className="product-item">
        <img src={image} />
        <p className='price'><strong>Price: ${price}</strong></p>
        <button onClick={()=>addCart({id,price,image})} className='cart-btn'>Add Cart</button>
      </div>
    ))}
  </div>
  )
}

export default ProductItem