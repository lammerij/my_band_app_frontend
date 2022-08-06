import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BandForm({bands, setBands}) {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [instrument_needed, setInstrumentNeeded] = useState("");


  const navigate = useNavigate();

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleGenreChange(event) {
    setGenre(event.target.value);
  }
  function handleInstrumentNeededChange(event) {
    setInstrumentNeeded(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      [name, genre, instrument_needed].some(
        (value) => value.trim() === ""
      )
    ) {
      alert("Please Fill Out Form, Thank You!");
      return null;
    }

    const newBand = {
      name: name,
      genre: genre,
      instrument_needed: instrument_needed,
      
    };
    // console.log(newBand);
    fetch("http://localhost:9494/bands", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBand),
    })
      .then((response) => response.json())
      .then((newBand) => {
        setBands([...bands, newBand]);
      });
    navigate("/bands");
    setName("");
    setGenre("");
    setInstrumentNeeded("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            placeholder="Type Text Here..."
            onChange={handleNameChange}
          />
        </label>
        <label>
          Genre:
          <input
            type="text"
            value={genre}
            placeholder="Type Text Here..."
            onChange={handleGenreChange}
          />
        </label>
        <label>
          Instrument Needed:
          <input
            type="text"
            value={instrument_needed}
            placeholder="Type Text Here..."
            onChange={handleInstrumentNeededChange}
          />
        </label>
        <button>Add Band!</button>
      </form>
    </div>
  );
}

export default BandForm