import { env } from '@/drivers/env/t3env';
import { trpc } from '@/drivers/views/hooks/trpc';

import TrackInfo from './TrackInfo';

/**
 * @deprecated 今後は使わない予定
 */
const Library = () => {
  const { data: spotifyLibrary } = trpc.spotify.spotifyLibrary.useQuery({
    limit: env.NEXT_PUBLIC_SPOTIFY_LIBRARY_LIMIT,
  });
  return (
    <div className="flex flex-col gap-y-4">
      <div className="grid gap-4">
        {spotifyLibrary?.tracks?.map((track) => (
          <TrackInfo key={track.id} track={track} />
        ))}
        {!spotifyLibrary?.tracks && <div>Error</div>}
      </div>
      <p>{`Songs from physical media or iTunes store are not listed`}</p>
    </div>
  );
};

export default Library;
