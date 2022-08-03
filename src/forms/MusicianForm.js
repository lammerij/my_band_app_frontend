import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MusicianForm({ setMusicians }) {
  const [name, setName] = useState("");
  const [instrument, setInstrument] = useState("");
  const [city, setCity] = useState("");
  const [yearsExperience, setYearsExperience] = useState("");

  const navigate = useNavigate();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      [name, instrument, city, yearsExperience].some(
        (value) => value.trim() === ""
      )
    ) {
      alert("Please Fill Out Form, Thank You!");
      return null;
    }


    const newMusician = { name, instrument, city, yearsExperience };

    fetch("http://localhost:9494/musicians", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newMusician }),
    })
      .then((response) => response.json())
      .then((newMusician) =>
        setMusicians((musicians) => {
          return [...musicians, newMusician];
        })
      );
    navigate("/musicians");
    setName("");
    setInstrument("");
    setCity("");
    setYearsExperience("");
  }
  return (
    <div>
     <form onSubmit={handleSubmit} className="form">
        <label>
          Name:
          <input type="text" value={name} placeholder="Type Text Here..." onChange={handleNameChange} />
        </label>
        <label>
          Instrument:
          <input
            onChange={(event) => setInstrument(event.target.value)}
            type="text"
            name="instrument"
            placeholder="Type Text Here..."
          ></input>
        </label>
        <label>
          City:
          <input
            onChange={(event) => setCity(event.target.value)}
            type="text"
            name="city"
            placeholder="Type Text Here..."
          ></input>
        </label>
        <label>
          Years Experience:
          <input
            onChange={(event) => setYearsExperience(event.target.value)}
            type="text"
            name="years experience"
            placeholder="Type Text Here..."
          ></input>
        </label>
        <button style={{ background: "white" }}>Add Musician!</button>
      </form>
    </div>
  );
}

export default MusicianForm;
