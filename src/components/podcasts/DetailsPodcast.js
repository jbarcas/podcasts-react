import React from "react";
import { Segment } from "semantic-ui-react";
import TableEpisodes from "./TableEpisodes";

class DetailsPodcast extends React.PureComponent {
  render() {
    return (
      <div>
        <Segment>
          <b>Episodes: {this.props.podcast.episodes.length}</b>
        </Segment>
        <TableEpisodes episodes={this.props.podcast.episodes} />
      </div>
    );
  }
}

export default DetailsPodcast;
