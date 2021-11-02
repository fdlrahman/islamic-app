import React from "react";
import "../style/components/Title.scss";
import { AiFillCaretDown } from "react-icons/ai";
import SelectCity from "./SelectCity";
import { connect } from "react-redux";

function Title({ content, color = "blue", lineCenter = true, waktuSholat = false, city }) {
    return (
        <div className={`title ${color}`}>
            <h1 className={` ${lineCenter && "center"}`}>
                {content}
                <span data-bs-toggle="modal" data-bs-target="#exampleModal">
                    {waktuSholat && city.lokasi.toLowerCase()} {waktuSholat && <AiFillCaretDown />}
                </span>
            </h1>
            <SelectCity />
        </div>
    );
}

const stateToProps = (state) => ({
    city: state.city,
});

export default connect(stateToProps)(Title);
