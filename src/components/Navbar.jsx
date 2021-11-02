import React from "react";
import "../style/components/Navbar.scss";
import muslim from "../assets/muslim.webp";
import { Link } from "react-router-dom";

function Navbar({ isSearch = false }) {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/">
                    <a className="navbar-brand">
                        <span>Islamic Bit</span> <img src={muslim} style={{ width: "20px" }} />
                    </a>
                </Link>
                {isSearch && <input type="text" placeholder="Surat yang ingin dibaca..." />}
            </div>
        </nav>
    );
}

export default Navbar;
