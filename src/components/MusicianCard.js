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
    <div class="card">
      <div class="user_info">
        <h1>{name}</h1>
        <p>{instrument}</p>
        <div class="row">
          <div class="follow">
            <p>City</p>
            <h5>{city}</h5>
          </div>
          <div class="follower">
            <p>Years Experience</p>
            <h5>{years_experience}</h5>
          </div>
          <div class="btn">
            <a href="">Hire</a>
          </div>
        </div>
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
