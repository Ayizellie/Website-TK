import React from "react";

const MapsKontak = () => {
    return (
        <div className="overflow-hidden rounded-xl border-[3px] border-blue-100">
            <iframe
            title="Lokasi TK Negeri 1 Sangatta Utara"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6500227112974!2d117.53035730000002!3d0.5262614999999936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320a3548c4fb7a21%3A0x3e7fd3b83fef375a!2sGg.%20Dayung%204B%2C%20Tlk.%20Lingga%2C%20Kec.%20Sangatta%20Utara%2C%20Kabupaten%20Kutai%20Timur%2C%20Kalimantan%20Timur%2075683!5e0!3m2!1sid!2sid!4v1752306682184!5m2!1sid!2sid" 
            className="w-full h-72 md:h-96 rounded-xl"
            allowFullScreen=""
            loading="lazy"
            ></iframe>
        </div>
    );
};

export default MapsKontak;