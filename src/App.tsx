import { useEffect } from "react";
import "./App.css";
import * as Tone from "tone";

let kick, kickLoop, snare, snareLoop, hihat, hihatLoop;

function App() {
  // const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  // const now = Tone.now();
  // synth.triggerAttack("C4", now);
  // synth.triggerAttack("E4", now+0.5);
  // synth.triggerAttack("G4", now+1);
  // synth.triggerAttack("B4", now+1.5);
  // synth.triggerRelease(["C4", "E4", "G4", "B4"], now + 2);

  useEffect(() => {
    kick = new Tone.Player(
      // "https://tonejs.github.io/audio/berklee/gong_1.mp3"
      "/kick.wav"
    ).toDestination();
    snare = new Tone.Player("/snare.wav").toDestination();
    hihat = new Tone.Player("/hihat.wav").toDestination();

    kickLoop = new Tone.Loop((time) => {
      kick.start(time);
    }, "4n");
    snareLoop = new Tone.Loop((time) => {
      snare.start(time);
    }, "2n");

    hihatLoop = new Tone.Loop((time) => {
      hihat.start(time + "16n");
    }, "4n");

    // Tone.loaded().then(() => {
    // kick.start();
    // Tone.getTransport().start();
    // Tone.getTransport().bpm(500);
    // });
  }, []);

  const handleStart = async () => {
    await Tone.start();
    kickLoop.start();
    snareLoop.start("4n");
    hihatLoop.start("8n");
    Tone.getTransport().bpm.value = 128;
    Tone.getTransport().start();
  };
  return (
    <>
      <h1>hello world</h1>
      <button onClick={handleStart}>start</button>
    </>
  );
}

export default App;
