import React from "react";
import MusicianCard from "../components/MusicianCard";

function HiredContainer({ hiredMusicians, updatedHiredList }) {
  const hired = hiredMusicians.map((musician) => {
    return (
      <MusicianCard
        musician={musician}
        key={musician.id}
        updatedHiredList={updatedHiredList}
      />
    );
  });
  return (
    <div>
      <h2>Hired Musicians</h2>
      <div>{hired}</div>
    </div>
  );
}

export default HiredContainer;
