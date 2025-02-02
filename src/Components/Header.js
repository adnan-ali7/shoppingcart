import React from 'react'

function Header(props) {
  return (
    <div className='header'>
        <div onClick={()=> props.handleShow(false)}>Shopping</div>
        <div onClick={()=> props.handleShow(true)}>My-Cart
            <sup>{props.count}</sup>
        </div>
    </div>
  )
}

export default Header