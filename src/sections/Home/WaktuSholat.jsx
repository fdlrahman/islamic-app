import React, { useEffect, useState } from "react";
import "../../style/sections/WaktuSholat.scss";
import Title from "../../components/Title";
import Waktu from "../../components/Waktu";
import { connect } from "react-redux";
import axios from "axios";
import HijriDate from "../../config/HijriDate";

function WaktuSholat({ city }) {
    const [jadwal, setJadwal] = useState([]);
    const waktuSholat = ["imsak", "subuh", "terbit", "dhuha", "dzuhur", "ashar", "maghrib", "isya"];

    const MasehiDays = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const MasehiMonths = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    const masehiTime = new Date().getTime();
    const masehiDay = new Date().getDay();
    const masehiDate = new Date().getDate().toString();
    const masehiMonth = (new Date().getMonth() + 1).toString();
    const masehiYear = new Date().getFullYear().toString();
    const masehiFullDate = `${masehiYear}/${masehiMonth.length == 1 ? "0" + masehiMonth : masehiMonth}/${masehiDate.length == 1 ? "0" + masehiDate : masehiDate}`;

    const hijriyahDate = new HijriDate().getDate();
    const hijriyahMonth = new HijriDate().getMonthName();
    const hijriyahYear = new HijriDate().getFullYear();

    useEffect(() => {
        axios
            .get(`https://api.myquran.com/v1/sholat/jadwal/${city.id}/${masehiFullDate}`)
            .then((res) => setJadwal(res.data.data.jadwal))
            .catch((err) => console.log(err));
    });

    return (
        <div className="waktuSholat">
            <div className="main-container">
                <Title content="Waktu Sholat Daerah" color="white" lineCenter={true} waktuSholat={true} />

                <div className="tanggal">
                    <h3>
                        {MasehiDays[masehiDay]}, {masehiDate} {MasehiMonths[masehiMonth - 1]}
                    </h3>
                    <p>
                        {hijriyahDate} {hijriyahMonth} {hijriyahYear} H
                    </p>
                </div>

                <div className="jadwal">
                    {waktuSholat.map((waktu, key) => {
                        return <Waktu text={waktu} time={jadwal[waktu]} key={key} />;
                    })}
                </div>
            </div>
        </div>
    );
}

const stateToProps = (state) => ({
    city: state.city,
});

export default connect(stateToProps)(WaktuSholat);
