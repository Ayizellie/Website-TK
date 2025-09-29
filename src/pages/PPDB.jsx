// pages/ppdb.js

import React, { useState } from "react";
import HeaderPPDB from "../components/ppdb/header";
import BadgeMenu from "../components/ppdb/badgemenu";
import SyaratPendaftaran from "../components/ppdb/syaratppdb";
import PendaftaranPPDB from "../components/ppdb/tahapanppdb";
import Footer from "../components/landingpage/Footer";

export default function PPDB() {
  const [selected, setSelected] = useState("persyaratan"); // STATE DI SINI

  return (
    <main className="w-full overflow-x-hidden">
      <HeaderPPDB />
      <BadgeMenu selected={selected} setSelected={setSelected} /> {/* ← PASS PROPS */}

      {selected === "persyaratan" && <SyaratPendaftaran />}
      {selected === "pendaftaran" && <PendaftaranPPDB />}

      <Footer />
    </main>
  );
}
