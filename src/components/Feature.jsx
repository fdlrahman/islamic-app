import React from "react";
import "../style/components/Feature.scss";

function Feature({ img, text }) {
    return (
        <div className="feature">
            <img src={img} alt="Feature Image" />
            <p>{text}</p>
        </div>
    );
}

export default Feature;
