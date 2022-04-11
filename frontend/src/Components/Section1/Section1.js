import React, { useEffect, useState } from "react";
import "./Section1.scss";
import BackgroundImage from "../../Images/backgroundimage.jpeg";
import Sliderimg from "../../Images/sliderImg.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



    



function Section1() {
    const [top,setTop] = useState("-200px")
    const [trans,setTrans] = useState(0)
    const [color,setColor] = useState("green")
    const settings = {
    
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        initialSlide: 1,
        arrows: true,
        dots: true,
        autoplay: true,
         speed: 1000,
         autoplaySpeed: 3000,
       
        
      };
    return (


        <section className="section1">
            
    
            <Slider {...settings}>
                <div className="slide1-item">
                <img  className="image" src={BackgroundImage} alt="oldbyurakan" />
              
                    
                </div>
                
                <div className="slide1-item">
                    <img className="image" src={Sliderimg} alt="oldbyurakan"  />
                    
                </div>
                </Slider>
            
                    
                    
                    
                    
                    
                    
                

        </section>
    )
}

export default Section1;