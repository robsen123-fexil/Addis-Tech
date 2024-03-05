import React, { useState } from "react";

const SongForm = () => {
  const [songData, setSongData] = useState({
    title: "",
    albumTitle: "",
    artist: "",
    image: null,
    audio: null,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSongData({
      ...songData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSongData({
      ...songData,
      image: file,
    });
  };

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    setSongData({
      ...songData,
      audio: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", songData.title);
    formData.append("albumTitle", songData.albumTitle);
    formData.append("artist", songData.artist);
    formData.append("image", songData.image);
    formData.append("audio", songData.audio);
    formData.append("description", songData.description);

    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Song submitted successfully!");
        // Reset the form data if needed
        setSongData({
          title: "",
          albumTitle: "",
          artist: "",
          image: null,
          audio: null,
          description: "",
        });
      } else {
        console.error("Error submitting song:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting song:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... other form fields ... */}

      <label>
        Image:
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>

      <label>
        Song Audio:
        <input
          type="file"
          name="audio"
          accept="audio/*"
          onChange={handleAudioChange}
        />
      </label>

      {/* ... other form fields ... */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SongForm;
