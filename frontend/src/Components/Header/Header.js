import React, { useEffect } from "react";
import "./Header.scss";
import Logo from "../../Images/logo.png";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.responsive.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



function Header() {

    useEffect(() => {
        const listDiv = document.querySelector(".list-div")
        const menuResponsive = document.querySelector(".menu-div");
        const menuIcon =document.querySelector(".menu-icon")
        const logo = document.querySelector(".logo-div")
        const home = document.querySelector("#home")
        const rooms = document.querySelector("#rooms")
        const servises = document.querySelector("#servises")
        const contacts = document.querySelector("#contacts")

        menuResponsive.addEventListener("click", () => {


            if (listDiv.style.display === "flex") {
                listDiv.style.display = "none";
            } else {
                listDiv.style.display = "flex";
            }

        })
        
        window.addEventListener("click",(event)=>{
            if(window.innerWidth <= 1000){
          console.log(event.target)
            if(event.target === listDiv ||event.target.tagName === "path"|| event.target === menuResponsive || event.target === menuIcon){
              return;
          }else{
            listDiv.style.display = "none";
          }
        }
        })
    
        logo.addEventListener("click", () => {
            window.scrollTo({
                top: 0,

            })
        })
        home.addEventListener("click", () => {
            window.scrollTo({
                top: 0,

            })
        })
        rooms.addEventListener("click", () => {
            window.scrollTo({
                top: 0,

            })
        })
        servises.addEventListener("click", () => {
            window.scrollTo({
                top: 0,

            })
        })
        contacts.addEventListener("click", () => {
            window.scrollTo({
                top: 0,

            })
        })

        window.addEventListener("resize",()=>{
            if (window.innerWidth >= 1000) {
                listDiv.style.display = "flex"
            }else{
                listDiv.style.display = "none"
            }
    
        })
    }, [])
    


    return (
        <header>
            <div className="header-cont">
                <Link className="link1" to={"/"} ><div className="logo-div">
                    <img src={Logo} alt="oldbyurakan"></img>
                </div></Link>
                <div className="list-div" >
                    <Link className="link" to={"/"}>
                        <div className="list-item" id="home">
                            Գլխավոր
                        </div></Link>
                    <Link className="link" to={"/rooms"}>
                        <div className="list-item" id="rooms">
                            Սենյակներ
                        </div>
                    </Link>
                    <Link className="link" to={"/servises"}>
                        <div className="list-item" id="servises">
                            Ծառայություններ
                        </div>
                    </Link>

                    <Link className="link" to={"/contacts"}>
                        <div className="list-item" id="contacts">
                            Կապ
                        </div> </Link>

                </div>
                <div className="menu-div"  >
                    <FontAwesomeIcon className="menu-icon" icon={faBars} />
                </div>
            </div>
        </header>
    )
}
export default Header;