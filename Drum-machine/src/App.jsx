import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

const audioClips = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];
const audio = new Audio();
function App() {
  const [volume, setVolume] = useState(1);
  return (
    <div className="bg-info min-vh-100 text-white" id="drum-machine">
      <div className="text-center">
        <h2>Drum-Machine</h2>
        {audioClips.map((clip) => (
          <Pad key={clip.id} clip={clip} volume={volume} />
        ))}
        <br />
        <h4>Volume</h4>
        <input
          type="range"
          step="0.01"
          onChange={(e) => setVolume(e.target.value)}
          volume={volume}
          max="1"
          min="0"
          className="w-50"
        />
      </div>
    </div>
  );
}

function Pad({ clip , volume}) {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  const handleKeyPress = (e) => {
    // console.log(e.keyCode)
    // console.log(clip.keyCode)
    // if(e.keyCode === clip.keyCode){
    //     playSound()
    // }
    audioClips.forEach((clip) => {
      if (e.keyCode === clip.keyCode) {
        let playUrl = clip.url;
        playOnKeyPress(playUrl);
      }
    });
  };

  const playOnKeyPress = (url) => {
    audio.src = url;
    audio.play();
    audio.volume = volume;
  };

  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger);
    audioTag.currentTime = 0;
    audioTag.play();
    audioTag.volume = volume;
  };

  return (
    <div onClick={playSound} className={`btn btn-secondary p-4 m-3 drum-pad`} id="display">
      <audio className="clip" id={clip.keyTrigger} src={clip.url} />
      {clip.keyTrigger}
    </div>
  );
}

export default App;
