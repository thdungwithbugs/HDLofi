import React, { useContext } from 'react';
import { Songs } from '../Context';

const DetailSong = () => {
    const {dataSong}=useContext(Songs)
    return (
        <div className='col-span-1 p-3 text-center'>
            <h2 className='font-bold text-[#fca311]'>Now playing</h2>
            <h2 className='text-[#14213d] text-2xl'>{dataSong.name}</h2>
            <div className='w-[240px] m-auto my-10'>
                <img className='w-[50vh] h-[40vh] object-cover rounded-lg shrink-0' src={dataSong.links.images[0].url} alt="thumnailSong" />
            </div>
            <div className='flex justify-evenly items-center w-[40vh] mx-auto'>
                <img className='w-[70px] h-[70px] object-cover rounded-full' src={dataSong.links.images[1].url}  alt="author" />
                <span className='text-topicColor font-bold text-lg'>{dataSong.author}</span>
            </div>
        </div>
    );
};

export default DetailSong;