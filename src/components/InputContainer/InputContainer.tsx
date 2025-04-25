import React from "react";
import "./InputContainer.css";

interface Props {
  setTitle: (title: string) => void;
  setArtist: (title: string) => void;
  getLyrics: () => void;
}
function InputContainer({ setTitle, setArtist, getLyrics }: Props) {
  return (
    <div className="InputContainer">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Song title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Artist"
          onChange={(e) => setArtist(e.target.value)}
        ></input>
      </div>
      <button
        type="button"
        className="btn btn-outline-light SearchButton"
        onClick={getLyrics}
      >
        Search
      </button>
    </div>
  );
}

export default InputContainer;
