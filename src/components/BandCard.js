import React from "react";

function BandCard({ band }) {
  const { id, name, genre, instrument_needed } = band;
  return (
    <div class="card">
      <div class="user_info">
        <h1>{name}</h1>
        <p>{genre}</p>
        <div class="row">
          <div class="follower">
            <p>Hiring:</p> <h5>{instrument_needed}</h5>
            <p>Interested</p>
            <button>♡</button>
          </div>
          <div class="btn">
            <a href="">Apply</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BandCard;
