import { google } from 'googleapis';

const googleAuth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  },
  scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
});

const youtubeAPI = google.youtube({
  auth: googleAuth,
  version: 'v3',
});

export const channelID = 'UCgZgEdT-H9bSqhumMiWybXA';

export default youtubeAPI;
