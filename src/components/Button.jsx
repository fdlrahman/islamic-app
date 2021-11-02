import React from "react";
import "../style/components/Button.scss";

function Button({ text, color = "yellow", isForm = false }) {
    return (
        <button type={isForm ? "submit" : "button"} className={`button ${color}`}>
            {text}
        </button>
    );
}

export default Button;
