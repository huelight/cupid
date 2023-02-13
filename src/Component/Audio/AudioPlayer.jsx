import React, { useState } from 'react';
import song from '../../Assets/Static/a.mp3'

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(song));

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <div>
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default AudioPlayer;
