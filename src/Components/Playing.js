import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

const Playing = () => {
  const {dataSong, handleSetSong, } = useContext(Songs)
  const handleClickNext = () => {
    handleSetSong(dataSong.id+1)
  }
  const handleClickPre=()=>{
    handleSetSong(dataSong.id-1)
  }
  return (
    <div>
      <AudioPlayer src={dataSong.url} layout="stacked-reverse" className="player-bar" showSkipControls={true} showJumpControls={false} onClickNext={handleClickNext} onClickPrevious={handleClickPre} />
    </div>
  );
};

export default Playing;
