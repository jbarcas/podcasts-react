import axios from "axios";

export default {
  podcasts: {
    getAll: () =>
      axios
        .get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
        .then(res => res.data.feed.entry)
  }
};
