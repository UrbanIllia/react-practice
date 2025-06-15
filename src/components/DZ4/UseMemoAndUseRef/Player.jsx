import { useRef, useState } from "react";
import css from "./Player.module.css";

const Player = ({ source }) => {
  const playerRef = useRef();
  //   const [isPlaying, setIsPlaying] = useState(false);

  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();

  //   const play = () => {
  //     if (playerRef.current) {
  //       playerRef.current
  //         .play()
  //         .then(() => setIsPlaying(true))
  //         .catch((error) => console.log("Play error:", error));
  //     }
  //   };

  //   const pause = () => {
  //     if (playerRef.current) {
  //       playerRef.current
  //         .pause()
  //         .then(() => setIsPlaying(false))
  //         .catch((error) => console.log("Pause error:", error));
  //     }
  //   };
  return (
    <div className={css.wrappPlayer}>
      <video ref={playerRef} src={source} controls className={css.video}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play} className={css.btnPlay}>
          Play
        </button>
        <button onClick={pause} className={css.btnPause}>
          Pause
        </button>
      </div>
    </div>
  );
};

export default Player;
