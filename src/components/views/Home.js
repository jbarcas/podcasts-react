import React from "react";
import { Grid, Label, Segment } from "semantic-ui-react";
import api from "../../api";
import Podcast from "../podcasts/Podcast";
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
    api.podcasts.getAll().then(podcasts => {
      this.setState({ podcasts: podcasts, filteredPodcasts: podcasts });
      this.props.isLoading(false);
    });
  };

  onChange = e => {
    let updatedList = this.state.podcasts.filter(
      podcast => podcast.title.label.toLowerCase().search(e.target.value.toLowerCase()) !== -1
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
