import axios from "axios";
import Parser from "rss-parser";

const CORS_PROXY = "https://cors.io/?";
// const CORS_PROXY = "https://crossorigin.me/";
// const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export default {
  podcasts: {
    getAll: () =>
      axios
        .get(
          `${CORS_PROXY}https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
        )
        .then(res => {
          let podcasts = [];
          res.data.feed.entry.forEach(p => {
            let podcast = {
              id: p.id.attributes["im:id"],
              img: p["im:image"][2].label,
              name: p["im:name"].label,
              author: p["im:artist"].label,
              summary: p.summary ? p.summary.label : "No description"
            };
            podcasts.push(podcast);
          });
          return podcasts;
        })
        .catch(
          error => console.log(`Error at fetching podcasts: ${error}`)
        ),

    getPodcast: podcastId =>
      axios
        .get(`${CORS_PROXY}https://itunes.apple.com/lookup?id=${podcastId}`)
        .then(res => {
          const p = res.data.results[0];
          let podcast = {
            id: p.trackId,
            artwork: p.artworkUrl600,
            name: p.trackName,
            feedUrl: p.feedUrl,
            artistName: p.artistName
          };
          return podcast;
        })
        .catch(
          error => console.log(`Error at fetching podcast: ${error}`)
        ),

    getEpisodes: async podcast => {
      const parser = new Parser();
      let episodes = [];
      const feed = await parser.parseURL(`${CORS_PROXY}${podcast.feedUrl}`);
      feed.items.forEach(episode => {
        episodes.push({
          id: episode.guid,
          title: episode.title,
          date: episode.pubDate,
          duration: episode.itunes.duration,
          content: episode.content,
          url: episode.enclosure.url
        });
      });
      return episodes;
    }
  }
};
