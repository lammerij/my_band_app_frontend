import React from "react";

function MusicianCard({ musician }) {
  const { id, name, instrument, city, years_experience } = musician;

  //   function handleFavoriteClick() {
  //     fetch(`http://localhost:3001/players/${id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         favorite: !favorite,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => updatedFavoriteList(data));
  //   }

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
      <div className="btn">
        <a href="">Retire</a>
      </div>
    </div>
  );
}

export default MusicianCard;

{
  /* <button onClick={handleFavoriteClick} style={{ background: "white" }}>
        {favorite ? "Unfavorite" : "Favorite"}
      </button> */
}
