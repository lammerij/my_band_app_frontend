import React from "react";
import MusicianCard from "../components/MusicianCard";

function MusicianContainer({ musicians }) {
  const musiciansCard = musicians.map((musician) => (
    <MusicianCard musician={musician} key={musician.id} />
  ));

  return (
  <div style={{ background: "white" }}>
    <h2></h2>
    <div style={{ display: "flex" }}>{musiciansCard}</div>
  </div>)
}

export default MusicianContainer;
