import axios from "axios";

export default {
  podcasts: {
    getAll: () =>
      axios
        .get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
        .then(res => res.data.feed.entry),
    getPodcast: (podcastId) =>
      axios
        .get(`https://cors.io/?https://itunes.apple.com/lookup?id=${podcastId}` )
        .then(res => res.data.results[0])
  }
};
