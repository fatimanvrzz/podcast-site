import { Episode } from '@/data/episods';
import { BiSolidRightArrow } from "react-icons/bi";

interface EpisodeItemProps {
  episode: Episode;
}

export default function EpisodeItem({ episode }: EpisodeItemProps) {
  return (
    <div className="mb-8 bg-background px-9 border-b border-slate-100">
      <p className="text-sm/7 font-sans text-slate-500">{episode.date}</p>
      <h3 className="text-xl my-2 font-bold">{episode.title}</h3>
      <p className='text-base/7 text-slate-700 mt-1'>{episode.description}</p>
      <div className="flex items-center gap-2 mt-2 mb-10 text-pink-600">
        <BiSolidRightArrow className='w-[0.9rem] h-[0.9rem]'/>
        <div className="flex gap-2">
          <p className='text-md text-pink-600 cursor:pointer'>Listen</p>
          <p className='text-md text-slate-700'>/</p>
          <p className='text-md text-pink-600 cursor:pointer'>Show notes</p>
        </div>
      </div>
    </div>
  );
}
