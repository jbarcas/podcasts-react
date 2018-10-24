import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/views/Home";
import DetailsPodcast from "./components/views/DetailsPodcast";
import DetailsEpisode from "./components/views/DetailsEpisode";
import PageHeader from './components/header/PageHeader';

const App = () => (
  <div className="ui container">
    <PageHeader />
    <Route path="/" exact component={Home} />
    <Route path="/podcast/:podcastId" exact component={DetailsPodcast} />
    <Route path="/podcast/:podcastId/episodes/:episodeId" component={DetailsEpisode} />
  </div>
);

export default App;
