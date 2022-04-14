import React, {useContext} from "react";
import {Context} from "../index"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import {Button, Form, FormControl, NavDropdown} from "react-bootstrap"
import { observer } from "mobx-react-lite"
import Container from "react-bootstrap/Container"
import { useHistory } from "react-router-dom";



const Navb = observer(() =>{
    const {user} = useContext(Context)
    console.log(user)
    const history = useHistory()
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <NavLink style={{color:"white"}} className="mr-2" to={SHOP_ROUTE}>Магазин</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/Basket">Корзина</Nav.Link>
            <Nav.Link href="/Shop">Магазин</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            {user.isAuth ?
                  <Nav className="ml-auto" style={{color:"white"}} >
                      <Button 
                      variant={"outline-light"} 
                      onClick={() => history.push(ADMIN_ROUTE)}
                      >
                        Админ Панель
                      </Button>

                      <Button 
                      variant={"outline-light"} 
                      onClick={() => history.push(LOGIN_ROUTE)}
                      className="ms-2"
                      >
                        Выйти
                      </Button>   
                  </Nav>
                  :
                  <Nav className="ml-auto" style={{color:"white"}} >
                      
                      <Button variant={"outline-light"} onClick={() => user.setIsAuth (true)}>Авторизация</Button>
                </Nav>
              }
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  })
  
  export default Navb;