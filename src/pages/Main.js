import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

const Main = () => {

    const slides = [
        {
          id: 1,
          title: "Slide #1",
          src: "https://i.pinimg.com/originals/df/62/e0/df62e0c2de432a875232774d8109a129.jpg",
          desc: "BUILDING #1",
        },
        /*{
          id: 2,
          title: "Slide #2",
          src: "https://isconspb.ru/wp-content/uploads/facade-building-glass-bottom-view-sky-4k_1538066457-768x432.jpg",
          desc: "BUILDING #2",
        },*/
      ];
  
  
  
      return (
        <div >
          <Carousel >
        {slides.map((info, index) => <Carousel.Item className=" pb-5" key={info.id}>
          <img
            className="d-block w-100 vh-100"
            src={info.src}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{info.title}</h3>
            <p>{info.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>)}

      </Carousel>
      </div>
        
      );
    }
    
    export default Main;


