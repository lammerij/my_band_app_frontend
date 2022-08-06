import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import MusicianContainer from "./containers/MusicianContainer";
import BandContainer from "./containers/BandContainer";
import MusicianForm from "./forms/MusicianForm";
import HiredContainer from "./containers/HiredContainer";
import BandForm from "./forms/BandForm";

function App() {
  const [musicians, setMusicians] = useState([]);
  const [bands, setBands] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:9494/musicians")
      .then((response) => response.json())
      .then((data) => setMusicians(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9494/bands")
      .then((response) => response.json())
      .then((data) => setBands(data));
  }, []);

  // const updatedMusicianList = (updatedMusician) => {
  //   const updatedMusicians = musicians.filter(musician => updatedMusician.id === musician.id ? updatedMusician : musician)
  //   setMusicians(updatedMusicians)
  // }

  const deleteMusicianList = (deletedMusician) => {
    const deletedMusicians = musicians.filter(musician => musician.id !== deletedMusician)
    setMusicians(deletedMusicians)
  }

  const updatedHiredList = (hiredMusician) => {
    const hiredMusicians = musicians.map(musician => hiredMusician.id === musician.id ? hiredMusician : musician)
    setMusicians(hiredMusicians)
  }

  const hiredMusicians = musicians.filter((musician) => {
    return musician.hired;
  });

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/musicians/new"
            element={
              <MusicianForm musicians={musicians} setMusicians={setMusicians} />
            }
          />
          <Route
            exact
            path="/bands"
            element={<BandContainer bands={bands} />}
          />
          <Route
            exact
            path="/bands/new"
            element={<BandForm bands={bands} setBands={setBands} />}
          />
          <Route
            exact
            path="/musicians"
            element={
              <MusicianContainer
                // setMusicians={setMusicians}
                musicians={musicians}
                updatedHiredList={updatedHiredList}
                // updatedMusicianList={updatedMusicianList}
                deleteMusicianList={deleteMusicianList}
              />
            }
          />
          <Route
            exact
            path="/musicians/hiredmusicians"
            element={
              <HiredContainer
                updatedHiredList={updatedHiredList}
                hiredMusicians={hiredMusicians}
              />
            }
          />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
