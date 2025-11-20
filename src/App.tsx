import { useEffect } from "react";
import "./App.css";
import * as Tone from "tone";

function App() {
  useEffect(() => {
    // const sampler = new Tone.Sampler({
    //   urls: {
    //     C4: "C4.mp3",
    //     "D#4": "Ds4.mp3",
    //     "F#4": "Fs4.mp3",
    //     A4: "A4.mp3",
    //   },
    //   release: 1,
    //   baseUrl: "https://tonejs.github.io/audio/salamander/",
    // }).toDestination();
    // Tone.loaded().then(() => {
    //   sampler.triggerAttackRelease(["Eb4", "G4", "Bb4"], 4);
    // });

    const player = new Tone.Player({
      // url: "https://tonejs.github.io/audio/berklee/gurgling_theremin_1.mp3",
      url: "/snare.wav",
      loop: true,
      autostart: true,
      
    });
    // const distortion =  new Tone.Distortion(0.4).toDestination();
    // const chorus = new Tone.Chorus(4, 4, 0.5).toDestination()
    // const filter = new Tone.Filter(400, "lowpass").toDestination();
    const delay = new Tone.FeedbackDelay(0.2, 0.2).toDestination();
    // player.connect(filter);
    player.connect(delay);
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
