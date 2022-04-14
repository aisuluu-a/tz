import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    console.log(location)
    return (
      <Container 
            className="d-flex flex-column min-vh-100 justify-content-center align-items-center"
            //style={{height: window.innerHeight = 54}}
        >
          <Card style={{width:'28rem'}} className="p-5">
              <h2 className="m-auto">{ isLogin ? "Авторизация" : " Регистрация"}</h2>
              <Form className="d-flex flex-column">
                  <Form.Control 
                    className="mt-3"
                    placeholder="Введите Ваш E-mail"
                  />
                  <Form.Control 
                    className="mt-3 align-self-end"
                    placeholder="Введите Ваш Пароль"
                  />
                  <Row className="d-flex justify-content-between mt-3 pe-3 ps-3" >

                      <Button variant={"outline-success"}> { isLogin ? "Войти" : "Регистрация"} </Button>
                      { isLogin ? 
                       <div>
                       Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                      </div>
                      : 
                      <div>
                      Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                    </div>}

                  </Row>

              </Form>
    
          </Card>


      </Container>
    );
  }
  
  export default Auth;