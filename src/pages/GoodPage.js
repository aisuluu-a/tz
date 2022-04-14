import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

const DevicePage = () => {

  const good = {id:1, name: "nike", price:"5000c", img: 'https://images.satu.kz/93688660_w640_h640_basketbolnye-krossovki-nike.jpg'}


  const description = [
    {id:1, title: "nike", description:"5000c"},
    {id:2, title: "nike", description:"5000c"},
    {id:3, title: "nike", description:"5000c"},
    {id:4, title: "nike", description:"5000c"}

  ]


    return (
      <Container className="mt-3" >
          <Row>
              <Col md={4}>
                  <Image width={300} height={300} src={good.img} />
              </Col>
              <Col md={4}>
                  <Row className="d-flex flex-column justify-contebt-center"
                  style={{width:300,  height:300, fontSize:32, border: "5px solid lightgray"}}>
                    <h2> {good.name} </h2>
                    
                  </Row>
              </Col>
              <Col md={4}>
                  <Card
                  className="d-flex flex-column align-items-center justify-content-around"
                  style={{width:300,  height:300, fontSize:32, border: "5px solid lightgray"}}
                  >

                      <h3> От: {good.price} сом</h3>
                      <Button variant={"outline-dark"}>Добавить в корзину</Button>
                  </Card>
              </Col>
          </Row>
          <Row className="d-flex flex-column m-3">
            <h1>Характеристика</h1>
              {description.map((info, index) => 
                  <Row key={info.id} style={{background: index % 2 === 0 ? "lightgray" : "trasparent", padding:10}}>
                      {info.title}: {info.description}
                  </Row>
              )}
          </Row>
      </Container>
    );
  }
  
  export default DevicePage;