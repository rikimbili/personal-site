export interface CurrentlyPlayingItem {
  name: string;
  artists: {
    name: string;
  }[];
  external_urls: {
    spotify: string;
  };
}

export interface CurrentlyPlayingData {
  is_playing: boolean;
  currently_playing_type: string;
  item: CurrentlyPlayingItem;
}

async function getNewAccessTokenFromRefreshToken(): Promise<void> {
  const params = new URLSearchParams({
    client_id: process.env.SPOTIFY_CLIENT_ID as string,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET as string,
    grant_type: "refresh_token",
    refresh_token: process.env.SPOTIFY_REFRESH_TOKEN as string,
  });

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "post",
    body: params,
  });
  const data = await response.json();

  if (response.ok) {
    process.env.SPOTIFY_ACCESS_TOKEN = data.access_token;
  } else {
    console.error(data);
    throw new Error("Failed to get new access token from refresh token");
  }
}

// TODO: Implement exponential backoff and possibly cache the response
//  -> https://www.npmjs.com/package/p-retry, https://www.npmjs.com/package/lru-cache
export default async function getCurrentlyPlaying(): Promise<CurrentlyPlayingData | null> {
  const response = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`,
      },
    }
  );

  if (response.status === 401) {
    // Refresh token if expired
    await getNewAccessTokenFromRefreshToken();
    return getCurrentlyPlaying();
  } else if (!response.ok || !response.body) {
    console.error("Failed to get currently playing or not playing anything");
    return null;
  } else {
    const data = await response.json();

    // Only return what is specified in CurrentlyPlayingData
    return {
      is_playing: data.is_playing,
      currently_playing_type: data.currently_playing_type,
      item: {
        name: data.item.name,
        artists: data.item.artists,
        external_urls: data.item.external_urls,
      },
    };
  }
}
