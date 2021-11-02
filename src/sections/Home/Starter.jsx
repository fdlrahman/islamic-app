import React from "react";
import "../../style/sections/Starter.scss";
import Navbar from "../../components/Navbar";
import Quotes from "../../components/Quotes";
import Button from "../../components/Button";

function Starter() {
    return (
        <div>
            <Navbar />
            <div className="starter">
                <div className="content">
                    <h1>
                        Lebih Seru dan Mudah Dengan <span>Islamic Bit</span>
                    </h1>
                    <p>Penuhi Kebutuhan Islamimu Setiap Hari Disini. Akses Kapan Saja Dimana Saja</p>
                    <a href="#features">
                        <Button text="Tingkatkan Amal" />
                    </a>
                </div>
            </div>
            <Quotes />
        </div>
    );
}

export default Starter;
