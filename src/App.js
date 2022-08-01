import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './components/Home'
import MusicianContainer from "./containers/MusicianContainer";
import BandContainer from "./containers/BandContainer";

function App() {
  const [musicians, setMusicians] = useState([])
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

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
        <Route exact path= '/' element={<Home/>}/>
        <Route exact path= '/bands' element={<BandContainer bands={bands}/>}/>
        <Route exact path= '/musicians' element={<MusicianContainer musicians={musicians}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
