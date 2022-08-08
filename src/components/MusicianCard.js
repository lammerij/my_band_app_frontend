import React from "react";

function MusicianCard({ musician, updatedHiredList, deleteMusicianList }) {

  const { id, name, instrument, city, years_experience, hired } = musician;

  function handleHiredClick() {
    fetch(`http://localhost:9494/musicians/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hired: !hired,
      }),
    })
      .then((response) => response.json())
      .then((data) => updatedHiredList(data));
  }

  function handleFiredClick() {
    fetch(`http://localhost:9494/musicians/${id}`, {
      method: "DELETE",
      headers: {
          'Content-type': 'application/json'
      }
    })
    .then(()=> {
      deleteMusicianList(id)
    }) 
  }

  return (
    <div className="card">
      <div className="user_info">
        <h1>{name}</h1>
        <p>{instrument}</p>
      </div>
      <div>
        <p>City: {city}</p>
        <div className="row">
          <div className="follower">
            <p>Years Experience: {years_experience}</p>
          </div>
        </div>
      </div>
      <div>
        <button onClick={handleHiredClick}>{hired ? "Hired" : "Hire"}</button>
      </div>
      <button onClick={handleFiredClick}>Fire</button>
    </div>
  );
}

export default MusicianCard;
