import React from "react";
import MusicianCard from "../components/MusicianCard";

function MusicianContainer({ musicians, updatedHiredList, updatedMusicianList, deleteMusicianList}) {
  const musiciansCard = musicians.map((musician) => {
    return <MusicianCard
      musician={musician}
      key={musician.id}
      updatedHiredList={updatedHiredList}
      updatedMusicianList={updatedMusicianList}
      deleteMusicianList={deleteMusicianList}
    />
  });

  return (
    <div style={{ background: "white" }}>
      <div style={{ display: "flex" }}>{musiciansCard}</div>
    </div>
  );
}

export default MusicianContainer;
