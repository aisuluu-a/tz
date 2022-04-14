import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { Context } from '../index'
import BasketItem from './BasketItem'

const BusketList = () => {
    const {basket} = useContext (Context)
    const cost = basket.reduce((sum, good) => sum + good.price*good.quantity, 0)
  return (
        <>
            {basket.length ? (
                <Table bordered hover size = "sm" className='mt-3'>
                    <thead>
                        <th>Наименовае</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>Сумма</th>
                        <th>Удалит</th>
                    </thead>
                    <tbody>
                        {basket.map(good => <BasketItem key={good.id} {...good} />)}
                        <tr>
                            <th colSpan="3">Total</th>
                            <th>{cost}</th>
                            <th>com</th>

                        </tr>
                    </tbody>
                </Table>)
                :(<p>nothing</p>
            )}
        </>
  )
}

export default BusketList