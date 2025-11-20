import { useEffect } from "react";
import "./App.css";
import * as Tone from "tone";

function App() {
  // const synth = new Tone.Synth().toDestination();
  // const now = Tone.now();
  // console.log(now)
  // // synth.triggerAttackRelease("C4", now+1);
  // synth.triggerAttackRelease("C4", "8n",now);
  // synth.triggerAttackRelease("D4", "8n", now+1)
  // setInterval(()=>{
  //   console.log(Tone.now())
  // }, 500)
  
  const synthA = new Tone.FMSynth().toDestination();
  const synthB = new Tone.FMSynth().toDestination();
  const loopA = new Tone.Loop((time)=>{
    synthA.triggerAttackRelease("C4", "8n", time);
  }, "2n").start(0)
  const loopB = new Tone.Loop((time)=>{
    synthB.triggerAttackRelease("D4", "8n", time)
  }, "2n").start("8n")
  Tone.getTransport().start()
  Tone.getTransport().bpm.rampTo(800,  10)
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
