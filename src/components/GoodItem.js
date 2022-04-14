import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { GOOD_ROUTE } from '../utils/consts'

const GoodItem = ({good}) => {
    const history = useHistory()
    console.log(history)
  return (
    <Col md={3} className="mt-3" onClick={() => history.push(GOOD_ROUTE + "/" + good.id)}>
        <Card  style={{width:150, cursor:"pointer"}} border={"light"}>
            <Image width={150} height={150} src={good.img}/>
            <div className='text-black-50'>
                <div>Selaaaa</div>
            </div>
            <div>
                {good.name}
            </div>
        </Card>
    </Col>
  )
}

export default GoodItem