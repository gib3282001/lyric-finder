import React, { useState } from "react";
import InputContainer from "./components/InputContainer/InputContainer";
import Alert from "./components/Alert/Alert";
import LyricsContainer from "./components/LyricsContainer/LyricsContainer";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [error, setError] = useState(false);
  const getLyrics = () => {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.lyrics) {
          setLyrics(data.lyrics);
        } else {
          throw new Error("Lyrics not found");
        }
      })
      .catch((error) => {
        console.error("Failed to fetch lyrics:", error.message);
        setError(true);
      });
  };
  return (
    <>
      {error && (
        <Alert onClose={() => setError(false)}>
          Lyrics not found, try a different song or artist.
        </Alert>
      )}
      {!lyrics && (
        <InputContainer
          setTitle={setTitle}
          setArtist={setArtist}
          getLyrics={() => getLyrics()}
        ></InputContainer>
      )}
      {lyrics && (
        <LyricsContainer onClose={() => setLyrics("")}>
          {lyrics}
        </LyricsContainer>
      )}
    </>
  );
}

export default App;
