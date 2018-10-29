import React from "react";
import { Grid, Placeholder } from "semantic-ui-react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import { isOutdated } from "../utils/Utils";
import PodcastInfo from "../podcasts/PodcastInfo";
import DetailsPodcast from "../podcasts/DetailsPodcast";
import DetailsEpisode from "../podcasts/DetailsEpisode";
import api from "../../api";

class PodcastContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      podcast: {
        episodes: []
      }
    };
  }

  componentDidMount = () => {
    /**
     * Si no existe el podcastKey en localStorage o si está desactializado, se hace la petición de nuevo
     * y se actualiza el timestamp del objeto almacenado en el localStorage
     */

    this.props.isLoading(true);

    const podcastKey = `podcast${this.props.match.params.podcastId}`;

    if (
      localStorage.getItem(podcastKey) === null ||
      isOutdated(JSON.parse(localStorage.getItem(podcastKey)).timestamp)
    ) {
      api.podcasts
        .getPodcast(this.props.match.params.podcastId)
        .then(podcast => {
          api.podcasts.getEpisodes(podcast).then(episodes => {
            podcast.episodes = episodes;
            podcast.description = this.props.location.state.podcast.summary;
            this.setState({ podcast });
            // Se añade/actualiza el objeto del localStorage
            let lsObject = { value: podcast, timestamp: new Date().getTime() };
            try {
              localStorage.setItem(podcastKey, JSON.stringify(lsObject));
            } catch (e) {
              console.log("Local Storage is full, Please empty data");
            }

            // Se desactiva el spinner
            this.props.isLoading(false);
          });
        });
    } else {
      // Se obtiene la respuesta almacenada en el localStorage y se actualiza el estado
      let lsPodcast = JSON.parse(localStorage.getItem(podcastKey)).value;
      this.setState({ podcast: lsPodcast });
      // Se desactiva el spinner
      this.props.isLoading(false);
    }
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={4}>
          {this.props.loading ? (
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          ) : (
            <PodcastInfo podcast={this.state.podcast} />
          )}
        </Grid.Column>
        <Grid.Column width={12}>
          <Route
            path={this.props.match.url}
            exact
            render={props => (
              <DetailsPodcast
                isLoading={this.loading}
                loading={this.props.loading}
                podcast={this.state.podcast}
              />
            )}
          />
          <Route
            path={`${this.props.match.url}/episodes/:episodeId`}
            render={props => <DetailsEpisode isLoading={this.loading} />}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default withRouter(PodcastContainer);
