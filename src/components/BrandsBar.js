import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Row } from 'react-bootstrap'
import { Context } from '../index'

const BrandsBar = observer(() => {
    const {good} = useContext(Context)
  return (
    <Row className='d-flex flex-col'>
        {good.brands.map(brand =>
            <Card
                style={{cursor: "pointer"}}
                key={brand.id}
                className="p-3 ml-2 mr-2"
                onClick={() => good.setSelectedBrand(brand)}
                border={brand.id === good.selectedBrand.id ? "info" : "light"}
            >
                {brand.name}
            </Card>
        )}
    </Row>
  )
})

export default BrandsBar