import React from "react";
import { Container } from "react-bootstrap";
import Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandsBar from "../components/BrandsBar";
import GoodList from "../components/GoodList";
import Main from "./Main";

const Shop = () => {
    return (
      <div>
        <Main />
        <Container>
        <Row className="mt-3">
            <Col md={3}>
              <TypeBar />
            </Col>
            <Col md={9}>
              <BrandsBar />
              <GoodList />
            </Col>
        </Row>
      </Container>
      </div>

    );
  }
  
  export default Shop;