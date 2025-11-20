import { useEffect } from "react";
import "./App.css";
import * as Tone from "tone";

function App() {
  
  return (
    <>
      <h1>hello world</h1>
      <button
        onClick={async () => {
          await Tone.start();
        }}
      >
        start
      </button>
    </>
  );
}

export default App;
