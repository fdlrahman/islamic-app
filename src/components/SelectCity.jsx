import React, { useState, useEffect } from "react";
import "../style/components/SelectCity.scss";
import axios from "axios";
import { connect } from "react-redux";

function SelectCity({ changeCity }) {
    const [input, setInput] = useState("");
    const [cities, setCities] = useState([]);
    const [templateCities, setTemplateCities] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.myquran.com/v1/sholat/kota/semua")
            .then((res) => {
                setCities(res.data);
                setTemplateCities(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleSelect = (city) => {
        changeCity(city);
    };

    const handleInput = (e) => {
        const search = e.target.value;

        setCities(
            templateCities.filter(function (name) {
                return name.lokasi.toLowerCase().match(search.toLowerCase());
            })
        );

        setInput(search);
    };

    return (
        <div className="select-city">
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Daftar Kota
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" placeholder="Cari Nama Kota / Daerah..." onChange={handleInput} value={input} />
                            <div className="select">
                                {cities.map((city, key) => (
                                    <p key={key} className="kota" data-bs-dismiss="modal" onClick={() => handleSelect(city)}>
                                        {city.lokasi.toLowerCase()}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const dispatchToProps = (dispatch) => ({
    changeCity: (city) => dispatch({ type: "CHANGE_CITY", city: city }),
});

export default connect(null, dispatchToProps)(SelectCity);
