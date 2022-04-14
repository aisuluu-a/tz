import React from "react";
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import Navb from "./components/Nav";
//import Main from "./pages/Main";
//import NavBar from "./components/NavBar";


const App = () =>{
  
  return (
   
  <BrowserRouter>
      
        <Navb />
        
      <AppRouter />
      <Footer />
</BrowserRouter>

    

  );
}

export default App;
