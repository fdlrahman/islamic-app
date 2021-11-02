import React from "react";
import "../style/components/Waktu.scss";
import Imsak from "../assets/imsak.webp";
import Subuh from "../assets/subuh.webp";
import Terbit from "../assets/terbit.webp";
import Dhuha from "../assets/dhuha.webp";
import Dzuhur from "../assets/dzuhur.webp";
import Ashar from "../assets/ashar.webp";
import Maghrib from "../assets/maghrib.webp";
import Isya from "../assets/isya'.webp";

function Waktu({ text, time }) {
    return (
        <div className="waktu">
            <div className="content">
                <h3>{text}</h3>
                <h2>{time}</h2>
            </div>
            <div className="image">
                <img src={Imsak} alt="imsak image" />
            </div>
        </div>
    );
}

export default Waktu;
