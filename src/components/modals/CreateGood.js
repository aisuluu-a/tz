import React, { useContext, useState } from 'react'
import Modal from "react-bootstrap/Modal"
import {Col, Dropdown, Form, Row} from "react-bootstrap"
import {Button} from "react-bootstrap"
import { Context } from '../..'

const CreateGood = ({show, onHide}) => {
    const {good} = useContext(Context)
    const [info, setInfo] = useState([])
    const addInfo = () => {
        setInfo([...info, {title:"", description:"", number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter( i => i.number !== number))
    }

    return (
      <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      >
          <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
              Добавить тип
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
                  <Form>
                      <Dropdown className='mt-3 mb-2'>
                          <Dropdown.Toggle>Выберите тип </Dropdown.Toggle>
                          <Dropdown.Menu>
                                {good.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                                )}
                          </Dropdown.Menu>
                      </Dropdown>

                      <Dropdown className='mt-3 mb-2'>
                          <Dropdown.Toggle>Выберите брэнд </Dropdown.Toggle>
                          <Dropdown.Menu>
                                {good.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                                )}
                          </Dropdown.Menu>
                      </Dropdown>
                        <Form.Control 
                            className='mt-3'
                            placeholder="Введите название товара"
                        />
                        <Form.Control 
                            className='mt-3'
                            placeholder="Введите стоимость товара"
                            type="number"
                        />
                        <Form.Control 
                            className='mt-3'
                            type="file"
                        />
                        <hr/>
                        <Button
                            variant={'outline-dark'}
                            onClick={addInfo}
                        >
                            Добавить новое свойство
                        </Button>
                        {info.map(i =>
                                <Row className='mt-3'key={i.number}>
                                    <Col md={4}>
                                        <Form.Control
                                            placeholder="Введите название свойства"
                                        /> 
                                    </Col>
                                    <Col md={4}>
                                        <Form.Control
                                            placeholder="Введите описание свойства"
                                        /> 
                                    </Col>
                                    <Col md={4}>
                                        <Button variant={'outline-danger'} onClick={() =>removeInfo(i.number)}>Удалить</Button> 
                                    </Col>
                                </Row>
                            )}

                  </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          <Button variant="outline-success" onClick={onHide}>Добавить</Button>
          </Modal.Footer>
    </Modal>
    )
  }

export default CreateGood