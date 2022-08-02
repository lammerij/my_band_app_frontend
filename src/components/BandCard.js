import React from "react";

function BandCard({ band }) {
  // console.log(band.musicians)
  const { id, name, genre, instrument_needed } = band;
  return (
    <div className="card">
      <div className="user_info">
        <h1>{name}</h1>
        <p>{genre}</p>
      </div>
      <div>
        <h4>Musicians:</h4>
        {band.musicians &&
          band.musicians.map((musician) => (
            <p key={musician.id}>
              {musician.name} : {musician.instrument}
            </p>
          ))}
        <div className="row">
          <div className="follower">
            <h4>Hiring:</h4>
            <h5>{instrument_needed}</h5>
          </div>
        </div>
      </div>
      <div className="btn">
        <a href="">Apply</a>
      </div>
    </div>
  );
}

export default BandCard;
