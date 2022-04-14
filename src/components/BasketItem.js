import React from 'react'

const BasketItem = (props) => {
  return (
    <tr>
        <td>{props.name}</td>
        <td>{props.quantity}</td>
        <td>{props.price}</td>
        <td>{props.price*props.quantity}</td>
        <td>delete</td>
    </tr>
  )
}

export default BasketItem