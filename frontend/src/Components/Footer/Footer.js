import React from "react";
import "./Footer.scss";
function Footer(){
    return(
  <footer>
      <div className="footer-content">
      <div className="social-media">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-google-plus-g"></i>
                <i class="fab fa-pinterest"></i>
                <i class="fas fa-envelope"></i>
                </div>
                <p class="copyright">
                    © 2022 OldByurakan | Made By Sirak
                </p>
      </div>
  </footer>
    )
}
export default Footer;