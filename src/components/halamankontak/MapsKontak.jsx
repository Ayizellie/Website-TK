import React from "react";

const MapsKontak = () => {
    return (
        <div className="overflow-hidden rounded-xl border-[3px] border-blue-100">
            <iframe
            title="Lokasi TK Negeri 1 Sangatta Utara"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.3535945486012!2d117.60111311815415!3d0.5144175390483879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320a4b1ee127f85b%3A0x8851b9162a8e7ccf!2sPAUD%20AL-WARDAH!5e0!3m2!1sid!2sid!4v1775469177657!5m2!1sid!2sid" 
            className="w-full h-72 md:h-96 rounded-xl"
            allowFullScreen=""
            loading="lazy"
            ></iframe>
        </div>
    );
};

export default MapsKontak;