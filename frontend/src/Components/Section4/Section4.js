import React from "react";
import "./Section4.scss";
import  "./Section4.responsive.scss";

function Section4() {
    return (
        <div className="section4">
            
            <div className="footer-contacts">
                    <h3>OldByurakan GuestHouse</h3>
                    <div>
                        <p>Արագածոտնի մարզ,
                        գ․ Բյուրական
                            <br />
                            Հեռ: +374 98011977
                            
                           
                            <br />
                            Էլ-հասցե:
                            <a className="mail" href="mailto:oldbyurakan@gmail.com">oldbyurakan@gmail.com</a>
                        </p>
                        
                    </div>
                </div>
            
            <div className="map">
            <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.222350358345!2d44.26186271475962!3d40.3374132683847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a8544db6ea3d1%3A0xa807fe194f505c39!2sOldByurakan%20guesthouse!5e0!3m2!1sru!2s!4v1645275153547!5m2!1sru!2s"></iframe>
            </div>
        </div>
    )
}
export default Section4;