import React, { useState, useEffect } from "react";
import "../../style/sections/Surah.scss";
import SurahCard from "../../components/SurahCard";
import Navbar from "../../components/Navbar";
import axios from "axios";

function Surah() {
    const [surah, setSurah] = useState([]);
    const [filter, setFilter] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        axios
            .get("https://api.quran.sutanlab.id/surah")
            .then((res) => {
                setSurah(res.data.data);
                setFilter(res.data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleInput = (e) => {
        const search = e.target.value;

        const filtering = filter.filter(function (surah) {
            return surah.name.transliteration.id.toLowerCase().match(search.toLowerCase());
        });

        setSurah(filtering);

        setInput(search);
    };

    return (
        <div className="surah">
            <Navbar isSearch={true} />
            <input type="text" onChange={handleInput} value={input} />
            <div className="main-container">
                {surah.map((surah, key) => (
                    <SurahCard surah={surah} />
                ))}
            </div>
        </div>
    );
}

export default Surah;
