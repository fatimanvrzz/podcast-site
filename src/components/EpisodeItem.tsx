"use client"; 

import { useState } from 'react';
import { Episode } from '@/data/episods';
import { BiSolidRightArrow } from "react-icons/bi";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

interface EpisodeItemProps {
  episode: Episode;
}

export default function EpisodeItem({ episode }: EpisodeItemProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="mb-8 bg-background px-5 md:px-9 border-b border-slate-100">
      <p className="text-sm/7 font-sans text-slate-500">{episode.date}</p>
      <h3 className="text-xl my-2 font-bold">{episode.title}</h3>
      <p className='text-base/7 text-slate-700 mt-1'>{episode.description}</p>
      <div className="flex items-center gap-2 mt-2 mb-10 text-pink-600">
        <BiSolidRightArrow className='w-[0.9rem] h-[0.9rem]' />
        <div className="flex w-full gap-2 items-center">
          <p className='text-md text-pink-600 cursor-pointer'>Listen</p>
          <p className='text-md text-slate-700'>/</p>
          <p className='text-md text-pink-600 cursor-pointer'>Show notes</p>
          <div 
            className='ml-auto text-[#000000] w-[0.9rem] h-[0.9rem] items-end cursor-pointer' 
            onClick={handleFavoriteClick}
          >
            {isFavorited ? <MdFavorite className="text-pink-700" /> : <MdFavoriteBorder />}
          </div>
        </div>
      </div>
    </div>
  );
}