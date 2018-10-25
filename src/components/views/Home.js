import React from "react";
import { Grid } from "semantic-ui-react";
import api from "../../api";
import Podcast from "../podcasts/Podcast";

class Home extends React.Component {
  state = {
    podcasts: []
  };

  componentDidMount = () => {
    api.podcasts.getAll().then(podcasts => {
      this.setState({ podcasts: podcasts });
      this.props.isLoading(false);
    });
  };

  render() {
    return (
      <Grid columns={4} padded centered>
        {this.state.podcasts.map(podcast => {
          return (
            <Grid.Column width={4} key={podcast.id.attributes["im:id"]}>
              <Podcast podcast={podcast} />
            </Grid.Column>
          );
        })}
      </Grid>
    );
  }
}

export default Home;
