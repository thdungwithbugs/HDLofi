import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

const ListSong = () => {
  const [idSong,setIdSong]=useState(0);
  const { DataSongs, handleSetSong, dataSong } = useContext(Songs);
  const handlePlaySong = (idSong) =>{
    // console.log(idSong);
    setIdSong(idSong)
    handleSetSong(idSong)
  }
  useEffect(() => {
    setIdSong(dataSong.id)
  }, [dataSong])
  
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full ">
        <thead className="text-topicColor h-12 sticky top-0 bg-stone-400">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => {
            return (
              <tr
                key={index}
                className={`h-12 bg-[#0a9396] text-black hover:text-white hover:bg-[#005f73] transition-all cursor-pointer ${idSong === song.id && 'text-emerald-300 bg-teal-700'}`}
                onClick={()=>handlePlaySong(song.id)}
              >
                <td className="text-center">{index + 1}</td>
                <td>{song.name}</td>
                <td className="text-center">{song.author}</td>
                <td className="text-center">
                  <a href={song.url}>
                    <i className="fa fa-download"></i>
                  </a>
                </td>
              </tr>
            );
          })}
          <tr>
            <td className="text-center"></td>
            <td></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListSong;
