import "./Contacts.scss";
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { Button } from "@react-md/button";
// import { TextIconSpacing } from "@react-md/icon";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {BsTelegram,BsFillTelephoneFill} from "react-icons/bs";
import {FaViber} from "react-icons/fa"
import Accmod from "../../Images/icon-accmod.png";

function Contacts() {
    return (
        <div className="contacts">
            <div className="contacts-content1">

                <h1>Կապ </h1>
                <img src={Accmod} alt="oldbyurakan" />

            </div>
            <div className="contacts-content2">
              
            </div>
        </div>
    )
}

export default Contacts;