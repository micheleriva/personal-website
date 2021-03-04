import youtube from '../../../lib/youtube';

export default async (_, res) => {
  const response = await youtube.playlistItems.list({
    playlistId: process.env.YOUTUBE_PLAYLIST_ID,
    part: 'snippet,contentDetails',
  });

  const videos = response.data?.items?.map((vid) => ({
    id: vid?.contentDetails?.videoId,
    title: vid?.snippet?.title,
    date: vid?.snippet?.publishedAt,
  }));

  return res.status(200).json({
    videos,
  });
};
