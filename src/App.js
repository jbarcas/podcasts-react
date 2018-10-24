import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import DetailsPodcast from "./components/DetailsPodcast";
import DetailsEpisode from "./components/DetailsEpisode";

const App = () => <div>
  <Route path="/" exact component={Home} />
  <Route path="/podcast/:podcastId" exact component={DetailsPodcast} />
  <Route path="/podcast/:podcastId/episodes/:episodeId" component={DetailsEpisode} />
</div>;

export default App;
