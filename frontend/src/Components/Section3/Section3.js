import React, { useEffect } from "react";
import "./Section3.scss";
import Accmod from "../../Images/icon-accmod.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed ,faUmbrella,faUtensils} from '@fortawesome/free-solid-svg-icons'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import Img1 from "../../Images/img1.jpeg";
import Img2 from "../../Images/img2.jpeg";
import "./Section3.responsive.scss";
import {useLocation} from "react-router";


function Section3() {
  const location = useLocation()
      console.log(location);



    return (
        <div className="section3">
            
            <div className="section3-content1">
            
                <h1>Ծառայություններ</h1>
                <img src={Accmod} alt="oldbyurakan" />
            
            </div>
            <div className="section3-content2">
                 <div className="servise-div">
                     <div className="servise">
                     <FontAwesomeIcon className="icone" icon={faBed} />
                     <div className="servise-text">
                     <h5>ՍԵՆՅԱԿՆԵՐ</h5>
                     <p>We provide all materials, labor, equip
                              ensure a safe and secure</p>
                              </div>
                     </div>
                     <div className="servise">
                     <FontAwesomeIcon  className="icone"  icon={faUmbrella} />
                     <div className="servise-text">
                     <h5>ՏԱՂԱՎԱՐ</h5>
                     <p>We provide all materials, labor, equip
                              ensure a safe and secure</p>
                              </div>
                     </div>
                     <div className="servise">
                     <FontAwesomeIcon className="icone"  icon={faUtensils} />
                     <div className="servise-text">
                     <h5>ԽՈՀԱՆՈՑ</h5>
                     <p>We provide all materials, labor, equip
                              ensure a safe and secure</p>
                              </div>
                     </div>
                 </div>
                 <div className="section3-img-div">
                 <Carousel   autoPlay={true} stopOnHover={false} showIndicators={false} interval={3500}  infiniteLoop={true} showArrows={true} style={{display:"flex"}} showStatus={false} showThumbs={false}>
                <div>
                <img className="section3-img"  src={Img1} />
                   
                </div>
                <div>
                    <img className="section3-img" src={Img2} />
                    
                </div>
                
            </Carousel>
                 </div>
            </div>
        </div>
    )
}
export default Section3;