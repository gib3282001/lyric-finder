import React, { ReactNode } from "react";
import "./LyricsContainer.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
function LyricsContainer({ children, onClose }: Props) {
  return (
    <div className="LyricsContainer">
      <button
        type="button"
        className="btn-close CloseButton"
        aria-label="Close"
        onClick={onClose}
      ></button>
      <pre className="mt-4 whitespace-pre-wrap bg-gray-100 p-4 rounded">
        {children}
      </pre>
    </div>
  );
}

export default LyricsContainer;
