import React, { useEffect, useState } from "react";
import "../style/components/Quotes.scss";
import { quotes } from "../config/data";

function Quotes() {
    const [arabic, setArabic] = useState("-");
    const [meaning, setMeaning] = useState("-");

    useEffect(() => {
        const randomNum = Math.floor(Math.random() * 25);
        const { arabic, arti } = quotes[randomNum];

        setArabic(arabic);
        setMeaning(arti);
    }, []);

    return (
        <div className="quotes">
            <p>Quotes Islami Untukmu:</p>
            <h5 className="arabic">{arabic}</h5>
            <p className="meaning">{meaning}</p>
        </div>
    );
}

export default Quotes;
