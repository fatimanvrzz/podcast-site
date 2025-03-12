import { Episode } from '@/data/episods';
import EpisodeItem from './EpisodeItem';

interface EpisodeListProps {
  episodes: Episode[];
}

export default function EpisodeList({ episodes }: EpisodeListProps) {
  return (
    <div className="h-full overflow-y-auto p-10">
      <h2 className="text-2xl mb-20 p-9 font-bold border-b border-slate-100">Episodes</h2>
      {episodes.map((episode) => (
        <EpisodeItem key={episode.id} episode={episode} />
      ))}
    </div>
  );
}
