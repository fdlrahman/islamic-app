import React, { useEffect, useState } from "react";
import "../../style/sections/SatuAyat.scss";
import Title from "../../components/Title";
import axios from "axios";

function SatuAyat() {
    const [ayat, setAyat] = useState({});

    useEffect(() => {
        axios
            .get("https://api.banghasan.com/quran/format/json/acak")
            .then((res) => {
                const { ar, id } = res.data.acak;

                setAyat({
                    arab: ar.teks,
                    arti: id.teks,
                    surat: id.surat + ":" + id.ayat,
                    namaSurat: res.data.surat.nama,
                });
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="satu-ayat">
            <div className="main-container">
                <Title content="Satu Ayat Untukmu" lineCenter={false} />
                <div className="ayat-group">
                    <h3 className="ayat">{ayat.arab}</h3>
                    <h3 className="surah">
                        Q.S {ayat.namaSurat} {ayat.surat}
                    </h3>
                    <p>{ayat.arti}.</p>
                </div>
            </div>
        </div>
    );
}

export default SatuAyat;
