import React from "react";
import "../../style/sections/Footer.scss";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <div className="footer">
            <div className="content">
                <h3> بَلِّغُوا عَنِّى وَلَوْ آيَة</h3>
                <p>"Sampaikanlah dariku walau hanya satu ayat"</p>
                <div className="social-media">
                    <div className="facebook">
                        <FaFacebookF />
                    </div>
                    <div className="twitter">
                        <FaTwitter />
                    </div>
                    <div className="email">
                        <MdEmail />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
