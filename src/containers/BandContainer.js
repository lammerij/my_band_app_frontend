import React from "react";
import BandCard from "../components/BandCard";

function BandContainer({ bands }) {
  const bandsCard = bands.map((band) => <BandCard band={band} key={band.id} />);
  return (
    <div style={{ background: "white" }}>
      <h2></h2>
      <div style={{ display: "flex" }}>{bandsCard}</div>
    </div>
  );
}

export default BandContainer;
