import React from "react";
import { Grid, Label, Segment } from "semantic-ui-react";
import api from "../../api";
import Podcast from "../podcasts/Podcast";
import { isOutdated } from "../utils/Utils";
import "../../css/podcasts.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: [],
      filteredPodcasts: [],
      filter: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount = () => {
    /**
     * Si no existe el podcastsKey en localStorage o si está desactializado, hacer la petición de nuevo
     * y actualizar el timestamp del objeto almacenado en el localStorage
     */
    let podcastsKey = "podcasts";
    //console.log(JSON.parse(localStorage.getItem(podcastsKey)).timestamp);
    if (localStorage.getItem(podcastsKey) === null || isOutdated(JSON.parse(localStorage.getItem(podcastsKey)).timestamp)) {
      // Se hace la petición inicial (o se hace de nuevo si ya expiró)
      api.podcasts.getAll().then(response => {
        // Se actualiza el estado
        this.setState({ podcasts: response, filteredPodcasts: response });
        // Se añade/actualiza el objeto del localStorage
        let lsObject = {value: response, timestamp: new Date().getTime()}
        localStorage.setItem(podcastsKey, JSON.stringify(lsObject));
      });
    } else {
      // Se obtiene la respuesta almacenada en el localStorage y se actualiza el estado
      let lsPodcasts = JSON.parse(localStorage.getItem(podcastsKey)).value;
      this.setState({ podcasts: lsPodcasts, filteredPodcasts: lsPodcasts });
    }
    // Se desactiva el spinner
    this.props.isLoading(false);
  };

  onChange = e => {
    let updatedList = this.state.podcasts.filter(
      podcast =>
        podcast.title.label
          .toLowerCase()
          .search(e.target.value.toLowerCase()) !== -1
    );
    this.setState({ filter: e.target.value, filteredPodcasts: updatedList });
  };

  render() {
    return (
      <div>
        <Segment textAlign="right" className="podcast-no-border">
          <Label color="blue" size="large">
            {this.state.filteredPodcasts.length}
          </Label>
          <div className="ui icon focus input">
            <i className="search icon" />
            <input
              type="text"
              placeholder="Filter podcasts..."
              name="filter"
              onChange={this.onChange}
              value={this.state.filter}
            />
          </div>
        </Segment>

        <Grid columns={4} padded centered>
          {this.state.filteredPodcasts.map(podcast => {
            return (
              <Grid.Column width={4} key={podcast.id.attributes["im:id"]}>
                <Podcast podcast={podcast} />
              </Grid.Column>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default Home;
