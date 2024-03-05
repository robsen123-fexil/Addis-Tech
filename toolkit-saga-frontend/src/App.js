import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getsongsFetch } from "./songState";
import "./App.css"; // Import the CSS file

import {
  BrowserRouter as Router,
  useNavigate,
  Route,
  Routes,
} from "react-router-dom";

import Create from "./pages/Create";

function App() {
  const songs = useSelector((state) => state.songs.songs);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook to get the navigation function

  useEffect(() => {
    dispatch(getsongsFetch());
  }, [dispatch]);

  const getDefaultImage = () => {
    return "https://th.bing.com/th/id/OIP.UpQTThAv4kAIuYUqdgPadgHaH_?w=181&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7";
  };

  // Function to handle button click and navigate to the "create" page
  const handleCreateButtonClick = () => {
    navigate("/create");
  };

  return (
    <div className="App">
      <div className="leftButton">
        <button onClick={handleCreateButtonClick}>Create Song</button>
      </div>
      <div className="content">
        <h1>MOST POPULAR SONG</h1>
        <p>Song List</p>
        <hr />
        <div className="Gallery">
          {songs.map((song) => (
            <div key={song.id} className="row">
              <div className="column column-left">
                <img src={song.image || getDefaultImage()} alt={song.artist} />
                <audio controls>
                  <source src={song.audio} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              <div className="column column-right">
                <h2>Artist Name {song.artist}</h2>
                <p>{song.albums}</p>
                <h7>YEAR OF PUBLISHED {song.year_of_published}</h7>
                <span>description {song.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AppWithRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}
