import React, { useEffect, useState } from "react";
import "./Section1.scss";
import BackgroundImage from "../../Images/backgroundimage.jpeg";
import Sliderimg from "../../Images/sliderImg.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'



    



function Section1() {
    const [top,setTop] = useState("-200px")
    const [trans,setTrans] = useState(0)
    const [color,setColor] = useState("green")
   
    function change(index,item){
        setTrans("0s")
         setTop("-700px")
         setTimeout(() => {
            setTrans("2s")
            setTop("-500px")
         },150)
      
    }

    useEffect(() => {
        setTrans("0s")
        setTop("-700px")
        setTimeout(() => {
           setTrans("2s")
           setTop("-500px")
        },150)

        setInterval(() => {
          setColor("green")
          setTimeout(() => {
             setColor("red")
          },2000)
          setTimeout(() => {
             setColor("brown")
          },4000)
        }, 6000)
    }, [])
    return (


        <section className="section1">
            
    
            <Carousel onChange={change} autoPlay={true} stopOnHover={false} showIndicators={false} interval={3500}  infiniteLoop={true} showArrows={true} style={{display:"flex"}} showStatus={false} showThumbs={false} >
                <div className="slide1-item">
                <img  className="image" src={BackgroundImage} alt="oldbyurakan" />
                <p className="legend" style={{top,transition:trans,color}} >Անց կացրեք լավագույն հանգիստ մեր հյուրատանը</p>
                    
                </div>
                
                <div className="slide1-item">
                    <img className="image" src={Sliderimg} alt="oldbyurakan"  />
                    <p className="legend" style={{top,color,transition:trans}} >Վայելեք Բյուրականի բնության զովացուցիչ հանգստությունը</p>
                </div>
                
            </Carousel>
                    
                    
                    
                    
                    
                    
                

        </section>
    )
}

export default Section1;