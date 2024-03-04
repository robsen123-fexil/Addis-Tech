import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getsongsFetch } from "./songState";
import "./App.css"; // Import the CSS file

function App() {
  const songs = useSelector((state) => state.songs.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getsongsFetch());
  }, [dispatch]);

  const getDefaultImage = () => {
    // Replace this URL with your default image URL
    return "https://th.bing.com/th/id/OIP.UpQTThAv4kAIuYUqdgPadgHaH_?w=181&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7";
  };

  return (
    <div className="App">
      <div className="carousel-item active">
        <div className="mask">
          <img
            src="https://cdn.shopify.com/s/files/1/0070/7032/files/business_20to_20consumer.png?v=1697741444"
            alt="carousel"
          />
        </div>
        <div className="carousel-caption d-none d-sm-block mb-5">
          <h1 className="mb-4">
            <strong> Today recommended Song </strong>
          </h1>
        </div>
      </div>

      <hr />
      <div className="Gallery">
        {songs.map((song) => (
          <div key={song.id} className="row">
            <div className="column">
              <img
                className="song-image"
                src={song.image || getDefaultImage()}
                alt={song.artist}
              />
              <audio controls>
                <source src={song.audio} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className="column">
              <h2>Artist Name {song.artist}</h2>
              <p>{song.albums}</p>
              <h7>YEAR OF PUBLISHED {song.year_of_published}</h7>
              <span>description {song.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
