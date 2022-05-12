import { useState } from "react";
import DetailSong from "./Components/DetailSong";
import ListSong from "./Components/ListSong";
import Navbar from "./Components/Navbar";
import Playing from "./Components/Playing";
import { Songs } from "./Context";
import DataSongs from './data/songs.json'

function App() {
  const [dataSong, setDataSong] = useState(DataSongs[0]);
  const handleSetSong = (idSong)=> {
    const selectedSong = DataSongs.find(dataSong=>dataSong.id===idSong);
    if(!selectedSong){
      setDataSong(DataSongs[0])
    } else{
    setDataSong(selectedSong)}
  }
  return (
    <div className="App">
      <Songs.Provider value={{DataSongs, dataSong, handleSetSong}} >
        <Navbar></Navbar>
        <div className="grid grid-cols-3 bg-white h-[calc(100vh-6rem*2)] overflow-hidden">
          <DetailSong />
          <ListSong />
        </div>
        <div className="h-[6rem] bg-black"><Playing/></div>
      </Songs.Provider>
    </div>
  );
}

export default App;
