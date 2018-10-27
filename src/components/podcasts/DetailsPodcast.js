import React from "react";
import { Segment } from "semantic-ui-react";
import { withRouter } from "react-router";
import TableEpisodes from "./TableEpisodes";

class DetailsPodcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      podcast: {}
    };
  }

  render() {
    return (
      <div>
        <Segment>
          <b>Episodes: {this.props.episodes.length}</b>
        </Segment>
        <TableEpisodes episodes={this.props.episodes} />
      </div>
    );
  }
}

export default withRouter(DetailsPodcast);
