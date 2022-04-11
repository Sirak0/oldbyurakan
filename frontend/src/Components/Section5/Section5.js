import React from "react";
import "./Section5.scss";
import "./Section5.responsive.scss";
import Accmod from "../../Images/icon-accmod.png";
import imgRoom1 from "../../Images/roomsImage/photo1.jpeg";
import imgRoom2 from "../../Images/roomsImage/photo2.jpeg";
import imgRoom3 from "../../Images/roomsImage/photo3.jpeg";
import imgRoom4 from "../../Images/roomsImage/IMG_E0428.JPG";
import imgRoom1A from "../../Images/roomsImage/hostel1.jpg";
import imgRoom2A from "../../Images/roomsImage/hostel2.jpg";
import imgRoom3A from "../../Images/roomsImage/hostel3.jpg";
import imgRoom4A from "../../Images/roomsImage/hostel4.jpg";
import { useState, useEffect, useRef } from "react";
import dist from "@testing-library/user-event";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {NavLink, useNavigate} from "react-router-dom";







function Section5() {
     const navigate =useNavigate()
     function toRoom1(){
        navigate("/room",{state:{url: imgRoom1, url2:imgRoom1A, guests: 2},replace: true})
    }
    function toRoom2(){
        navigate("/room",{state:{url: imgRoom2, url2:imgRoom2A,guests: 4},replace: true})
    }
    function toRoom3(){
        navigate("/room",{state:{url: imgRoom3, url2:imgRoom3A,guests: 2},replace: true})
    }
    function toRoom4(){
        navigate("/room",{state:{url: imgRoom4, url2:imgRoom4A, guests: 3},replace: true})
    }
     
    return (
        <div className="section5">
            <div className="section5-content1">
                <h1>Սենյակներ</h1>
                <img src={Accmod} alt="oldbyurakan" />
            </div>
            <div className="section5-content2">
               <div className="room-div" onClick={toRoom1} >
                
                    <img className="room-img" src={imgRoom1} alt="oldbyurakan" img />
                    <h4>Ստանդարտ <br></br>Երկտեղանոց</h4>
                    <FontAwesomeIcon className="next-icon" icon={ faArrowRight} />

                   
                </div>
                <div className="room-div" onClick={toRoom2}>
                
                <img className="room-img" src={imgRoom2} alt="oldbyurakan" img />
                <h4>Ընտանեկան Սենյակ<br></br>4 Անձի Համար</h4>
                <FontAwesomeIcon className="next-icon" icon={ faArrowRight} />
               
             </div>

             <div className="room-div" onClick={toRoom3}>
             
                <img className="room-img" src={imgRoom3} alt="oldbyurakan" img />
                <h4>Ստանդարտ <br></br>Երկտեղանոց</h4>
                <FontAwesomeIcon className="next-icon" icon={ faArrowRight} />
                
             </div>
             <div className="room-div" onClick={toRoom4}>
                 
                <img className="room-img" src={imgRoom4} alt="oldbyurakan" img />
                <h4>3 Անձի<br></br>Համար</h4>
                <FontAwesomeIcon className="next-icon" icon={ faArrowRight} />
               

            </div>



              </div >
          </div>
         

       
    )
}
export default Section5;