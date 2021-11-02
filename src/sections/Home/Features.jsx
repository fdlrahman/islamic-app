import React from "react";
import "../../style/sections/Features.scss";
import Title from "../../components/Title";
import Feature from "../../components/Feature";
import Quran from "../../assets/quran.webp";
import Allah from "../../assets/allah.webp";
import Praying from "../../assets/praying.webp";
import Hadits from "../../assets/hadits.webp";
import Lighter from "../../assets/lighter.webp";
import Tasbih from "../../assets/tasbih.webp";
import Muhammad from "../../assets/muhammad.webp";
import Prayer from "../../assets/prayer.webp";
import { Link } from "react-router-dom";

function Features() {
    return (
        <div className="features" id="features">
            <div className="main-container">
                <Title content="Pilih Kebutuhan Islamimu" lineCenter={true} />
                <div className="content">
                    <Link to="/alquran">
                        <Feature img={Quran} text="Al-Qur'an" />
                    </Link>
                    <Link to="/asmaulhusna">
                        <Feature img={Allah} text="Asmaul Husna" />
                    </Link>
                    <Link to="/doaharian">
                        <Feature img={Praying} text="Do'a Harian" />
                    </Link>
                    <Link to="/hadits">
                        <Feature img={Hadits} text="Hadits Rasul" />
                    </Link>
                    <Link to="/kisahnabi">
                        <Feature img={Lighter} text="Kisah Nabi & Rasul" />
                    </Link>
                    <Link to="/tahlil">
                        <Feature img={Tasbih} text="Bacaan Tahlil" />
                    </Link>
                    <Link to="/sholawat">
                        <Feature img={Muhammad} text="Sholawat Nabi" />
                    </Link>
                    <Link to="/bacaansholat">
                        <Feature img={Prayer} text="Bacaan Sholat" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Features;
