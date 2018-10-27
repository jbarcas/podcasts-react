import React from "react";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import PodcastInfo from "../podcasts/PodcastInfo";
import DetailsPodcast from "../podcasts/DetailsPodcast";
import DetailsEpisode from "../podcasts/DetailsEpisode";
import api from "../../api";

class PodcastContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      podcast: {}
    };
  }

  componentDidMount = () => {
    api.podcasts
      .getPodcast(this.props.match.params.podcastId)
      .then(podcast => {
        this.setState({ podcast })
      });
    // Se desactiva el spinner
    this.props.isLoading(false);
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={4}>
          <PodcastInfo podcast={this.state.podcast} description={this.props.location.state.podcast.summary.label}/>
        </Grid.Column>
        <Grid.Column width={12}>
          <Route path={this.props.match.url} exact render={props => <DetailsPodcast isLoading={this.loading} />} />
          <Route path={`${this.props.match.url}/episodes/:episodeId`} render={props => <DetailsEpisode isLoading={this.loading} />} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default withRouter(PodcastContainer);
