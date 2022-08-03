import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MusicianForm({ musicians, setMusicians }) {
  const [name, setName] = useState("");
  const [instrument, setInstrument] = useState("");
  const [city, setCity] = useState("");
  const [years_experience, setYearsExperience] = useState(0);
//   console.log(yearsExperience);

  const navigate = useNavigate();

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleInstrumentChange(event) {
    setInstrument(event.target.value);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function handleYearsExperienceChange(event) {
    setYearsExperience(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      [name, instrument, city, years_experience].some(
        (value) => value.trim() === ""
      )
    ) {
      alert("Please Fill Out Form, Thank You!");
      return null;
    }

    const newMusician = { 
        name: name,
        instrument: instrument,
        years_experience: parseInt(years_experience)
     };
    console.log(newMusician)
    fetch("http://localhost:9494/musicians", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMusician),
    })
      .then((response) => response.json())
      .then((newMusician) => {
        setMusicians([...musicians, newMusician]);
      });
    navigate("/musicians");
    setName("");
    setInstrument("");
    setCity("");
    setYearsExperience(0);
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
          Instrument:
          <input
            type="text"
            value={instrument}
            placeholder="Type Text Here..."
            onChange={handleInstrumentChange}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={city}
            placeholder="Type Text Here..."
            onChange={handleCityChange}
          />
        </label>
        <label>
          Years Experience:
          <input
            type="number"
            value={years_experience}
            placeholder="Type Number Here..."
            onChange={handleYearsExperienceChange}
          />
        </label>
        <button>Add Musician!</button>
      </form>
    </div>
  );
}

export default MusicianForm;
