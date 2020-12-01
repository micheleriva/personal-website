import { getNowPlaying } from '../../lib/spotify';

export default async (_, res) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ track: { isPlaying: false, cover: '/violin-meme.jpg' } });
  }

  const { item } = await response.json();
  const track = {
    isPlaying: true,
    artist: item.artists.map((_artist) => _artist.name).join(', '),
    songUrl: item.external_urls.spotify,
    title: item.name,
    cover: item.album.images[0].url,
    album: item.album.name,
  };

  return res.status(200).json({ track });
};
