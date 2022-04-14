import React, { useContext } from "react";
import { Route,  Redirect,  Switch} from "react-router-dom"
import { authRoutes, publicRoutes } from "../routes"
import { SHOP_ROUTE } from "../utils/consts";
import {Context} from "../index"


const AppRouter = () => {

    const {user} = useContext(Context)
    console.log(user)
    return (
      
          <Switch>
          {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
          )}
          {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
          )}
          <Redirect  to={SHOP_ROUTE} />
          </Switch>
          
        
    );
  }
  
  export default AppRouter;

  
  /*import { SHOP_ROUTE } from "../utils/consts";
import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes"

  function AppRouter() {
    const isAuth = true;
    return (
      
  <Routes>
  
          {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
          )}

          {publicRoutes.map(({path, Component}) =>
          <Route key={path} path={path} component={Component} exact/>
          )}

          <Route path="*" to={SHOP_ROUTE} />
</Routes>
  );
}

export default AppRouter;*/