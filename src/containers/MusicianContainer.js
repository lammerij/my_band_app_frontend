import React from "react";
import MusicianCard from "../components/MusicianCard";

function MusicianContainer({ musicians, updatedHiredMusicians }) {
  const musiciansCard = musicians.map((musician) => (
    <MusicianCard
      musician={musician}
      key={musician.id}
      // setMusicians={setMusicians}
      updatedHiredMusicians={updatedHiredMusicians}
    />
  ));

  return (
    <div style={{ background: "white" }}>
      <div style={{ display: "flex" }}>{musiciansCard}</div>
    </div>
  );
}

export default MusicianContainer;
