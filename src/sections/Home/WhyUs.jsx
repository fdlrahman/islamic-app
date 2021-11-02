import React from "react";
import "../../style/sections/WhyUs.scss";
import Title from "../../components/Title";

function WhyUs() {
    return (
        <div className="why-us">
            <div className="main-container">
                <div className="titles">
                    <Title content="Kenapa Pakai Islamic Bit?" />
                    <h5>Dengan Islamic Bit kamu dapat belajar sekaligus memenuhi kebutuhan Islamimu seperti:</h5>
                </div>
                <div className="content">
                    <ul>
                        <li>1. Mengetahui jadwal waktu sholat di Indonesia</li>
                        <li>2. Dapatkan kata-kata mutiara Islami</li>
                        <li>3. Membaca Al-Quran</li>
                        <li>4. Membaca Asmaul Husna</li>
                        <li>5. Membaca Doa-Doa Harian</li>
                        <li>6. Membaca Hadits-Hadits Rasulullah</li>
                        <li>7. Membaca Kisah 25 Nabi & Rasul</li>
                        <li>8. Membaca Bacaan Tahlil</li>
                        <li>9. Membaca sholawat-sholawat Nabi</li>
                        <li>10. Membaca Bacaan & Tuntunan Sholat</li>
                        <li>11. Mendapatkan pencerahan dari ayat-ayat Al-Quran</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
