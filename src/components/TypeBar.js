import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { ListGroup} from 'react-bootstrap'
import { Context } from '../index'

const TypeBar = observer(() => {
    const {good} = useContext(Context)
  return (
    
        <ListGroup>
            {good.types.map(type =>
                <ListGroup.Item 
                    style={{cursor: "pointer"}}
                    active={type.id === good.selectedType.id }
                    onClick={() => good.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
                )}
                 
        </ListGroup>
    
  )
})

export default TypeBar