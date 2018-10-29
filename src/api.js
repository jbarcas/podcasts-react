import axios from "axios";
import Parser from "rss-parser";

export default {
  podcasts: {
    getAll: () =>
      axios
        .get(
          "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
        )
        .then(res => res.data.feed.entry),
    getPodcast: podcastId =>
      axios
        .get(`https://cors.io/?https://itunes.apple.com/lookup?id=${podcastId}`)
        .then(res => res.data.results[0]),
    getEpisodes: async podcast => {
      const parser = new Parser();
      let episodes = [];
      const feed = await parser.parseURL(`https://cors.io/?${podcast.feedUrl}`);
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
