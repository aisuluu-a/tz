import React, {useContext} from "react";
import {Context} from "../index"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import {Button} from "react-bootstrap"
import { observer } from "mobx-react-lite"
import Container from "react-bootstrap/Container"
import { useHistory } from "react-router-dom";



const NavBar = observer(() =>{
    const {user} = useContext(Context)
    console.log(user)
    const history = useHistory()
    return (
      <Navbar collapseOnSelect bg="dark" variant="dark" className="d-flex">
        <Container>
        <NavLink style={{color:"white"}} className="mr-2" to={SHOP_ROUTE}>Магазин</NavLink>


       
              {user.isAuth ?
                  <Nav className="ms-auto" style={{color:"white"}} >
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

        </Container>

  </Navbar>
  
    );
  })
  
  export default NavBar;