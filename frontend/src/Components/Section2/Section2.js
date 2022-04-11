import React from "react";
import "./Section2.scss";
import Accmod from "../../Images/icon-accmod.png";
import Image4 from "../../Images/img4.jpeg";
import "./Section2.responsive.scss";
import {useEffect} from "react";

function Section2() {
    useEffect(() => {

        const section2Image = document.querySelector(".section2-img")
        const section2Text = document.querySelector(".section2-text")
        
        

            window.addEventListener("scroll", () => {
                if(window.scrollY > 300){
                    section2Image.style.left = "0px"
                    section2Text.style.right = "0px"
                }
                 
                       
            });
        
    }, [])


    return (
        <div className="section2">
               
               
            <div className="section2-content1">
                <h1>Մեր Մասին</h1>
                <img src={Accmod} alt="oldbyurakan" />
            </div>
            <div className="section2-content2">
                <div className="section2-img">
                    <img src={Image4} alt="oldbyurakan" />
                </div>
                <div className="section2-text">
                    <h2>OldByurakan GuestHous-ը գտնվում է
                        գեղատեսիլ Բյուրականում։</h2>
                    <p>Հյուրատունը  առաջարկում է յուրահատուկ
                        ինտերիերով և նրբաճաշակ կահավորանքով
                        համարներ, որոնք ապահովված են հարմարավետ
                        և լիարժեք հանգստի համար անհրաժեշտ բոլոր
                        պայմաններով:<br></br> Համարներից բացվում է
                        տեսարան դեպի գեղեցիկ բնությունը:<br></br>  Հյուրատունը
                        առաջարկում է ազգային ճաշատասակների
                        լայն ընտրանի:<br></br>  Ողջ տարածքն
                        ապահովված է անվճար Wi-Fi ինտերնետով:<br></br> 
                        Գտնվելով Բյուրականի կենտրոնում`
                        հյուրանոցը շատ մոտ է
                        բազմաթիվ տեսարժան վայրերի և ժամանցի
                        կենտրոնների:<br></br> Հին Բյուրական
                        հյուրատունը  իդեալական վայր է
                        բոլոր նրանց համար, ովքեր ցանկանում են կտրվել
                        քաղաքի աղմուկից և իրենց հանգիստը կազմակերպել
                        բնության գրկում:<br></br> 
                        Այստեղ անցկացրած յուրաքանչյուր օր
                        կլինի անմոռանալի և հաճելի
                        հիշողություններով լի:</p>

                        
                    
                
                </div>
                
            </div>

        </div>
    )
}
export default Section2;