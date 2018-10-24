import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/views/Home";
import DetailsPodcast from "./components/views/DetailsPodcast";
import DetailsEpisode from "./components/views/DetailsEpisode";
import PageHeader from "./components/header/PageHeader";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.loading = this.loading.bind(this);
  }

  loading(isLoading) {
    this.setState({ loading: isLoading });
  }

  render() {
    return (
      <div className="ui container">
        <PageHeader isLoading={this.loading} loading={this.state.loading}/>
        <Route path="/" exact render={props => <Home isLoading={this.loading} />} />
        <Route path="/podcast/:podcastId" exact render={props => <DetailsPodcast isLoading={this.loading} />}  />
        <Route path="/podcast/:podcastId/episodes/:episodeId" render={props => <DetailsEpisode isLoading={this.loading} />} />
      </div>
    );
  }
}

export default App;
