import { useEffect } from "react";
import "./App.css";
import * as Tone from "tone";

function App() {
  useEffect(() => {
    const sampler = new Tone.Sampler({
      urls: {
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();
    Tone.loaded().then(() => {
      sampler.triggerAttackRelease(["Eb4", "G4", "Bb4"], 4);
    });
  }, []);

  const handleStart = async () => {
    await Tone.start();
  };
  return (
    <>
      <h1>hello world</h1>
      <button onClick={handleStart}>start</button>
    </>
  );
}

export default App;
