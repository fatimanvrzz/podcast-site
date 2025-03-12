import Layout from '@/components/Layout';
import EpisodeList from '@/components/EpisodeList';
import { episodes } from '@/data/episods';
import SpotifyIcon from '@/components/SpotifyIcon';
import ApplePodcast from '@/components/ApplePodcast';
import OverCast from '@/components/OverCast';
import Feed from '@/components/Feed';
import AboutIcon from '@/components/AboutIcon';
import ListenIcon from '@/components/ListenIcon';

export default function Home() {
  return (
    <Layout>
      <div className="flex h-screen">
        <div className="w-[5rem] bg-slate-100 border-r border-slate-200 flex-col justify-center pt-20 p-5">
          <p style={{ writingMode: 'vertical-lr' }} className='gap-3 flex text-xl'> <span className='text-slate-500'>Hosted by</span><span> Fatima Novruzova</span></p>
        </div>

        <div className="w-2/4 p-20 border-r border-slate-100 overflow-y-auto h-full bg-slate-100">
          <img src="https://transmit.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fposter.11292dc0.png&w=640&q=75" className='rounded-2xl border-slate-700 shadow-xl' alt="" />
          <h5 className="text-2xl font-bold mb-3 mt-10">Their Side</h5>
          <p className='mb-10 line-clamp-3 text-base'>Conversations with the most tragically misunderstood people of our time.</p>
          <div className="mb-8 flex-col">
            <div className="flex items-center gap-2 mb-3">
              <AboutIcon />
              <h2 className="text-lg">About</h2>
            </div>
            <p className='line-clamp-4 text-base text-slate-700'>In this show, Eric and Wes dig deep to get to the facts with guests who have been labeled villains by a society quick to judge, without actually getting the full story. Tune in every Thursday to get to the truth with another misunderstood outcast as they share the missing context in their tragic tale.</p>
          </div>
          <div className="space-y-2 mt-10">
            <div className="flex items-center gap-2 mb-3">
              <ListenIcon />
              <h3 className="text-lg">Listen</h3>
            </div>
            <a href="#" className="text-slate-800 hover:underline flex items-center gap-1"> <SpotifyIcon /> Spotify</a>
            <a href="#" className="text-slate-800 hover:underline flex items-center gap-1"> <ApplePodcast /> Apple Podcast</a>
            <a href="#" className="text-slate-800 hover:underline flex items-center gap-1"> <OverCast /> Overcast</a>
            <a href="#" className="text-slate-800 hover:underline flex items-center gap-1"> <Feed /> RSS Feed</a>
          </div>
        </div>

        <div className="w-4/4 overflow-y-auto h-full">
          <EpisodeList episodes={episodes} />
        </div>
      </div>
    </Layout>
  );
}
