import youtube, { channelID } from '../../../lib/youtube';

export default async (_, res) => {
  const response = await youtube.channels.list({
    id: channelID,
    part: 'statistics',
  });

  const channel = response.data.items.shift();
  const { subscriberCount, viewCount, videoCount } = channel.statistics;

  return res.status(200).json({
    subscriberCount,
    viewCount,
    videoCount,
  });
};
