import React, { useState } from "react";
import "../style/components/SurahCard.scss";
import { FiChevronDown } from "react-icons/fi";

function SurahCard({ surah }) {
    const [show, setShow] = useState(false);

    return (
        <div className="surah-card">
            <div className="content">
                <div className="id">
                    <h3 className="number">{surah.number}.</h3>
                    <div>
                        <h2>{surah.name.transliteration.id}</h2>
                        <p>{surah.name.translation.id}</p>
                    </div>
                </div>
                <div className="ar">
                    <h3>{surah.name.short}</h3>
                </div>
            </div>
            <div className="text">
                <ul className={!show && "none"}>
                    <li>
                        Memiliki <strong>{surah.numberOfVerses} Ayat</strong>
                    </li>
                    <li>
                        Merupakan golongan surat <strong>{surah.revelation.id}</strong>
                    </li>
                    <li>{surah.tafsir.id}</li>
                </ul>
            </div>
            <div className="more">
                <FiChevronDown className={show && "rotate"} onClick={() => setShow(!show)} />
            </div>
        </div>
    );
}

export default SurahCard;
