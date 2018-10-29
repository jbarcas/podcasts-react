import React from "react";
import { Segment, Placeholder } from "semantic-ui-react";
import TableEpisodes from "./TableEpisodes";

class DetailsPodcast extends React.PureComponent {
  render() {
    return (
      <div>
        <Segment>
          {this.props.loading ? (
            <Placeholder>
              <Placeholder.Header>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
            </Placeholder>
          ) : (
            <b>Episodes: {this.props.podcast.episodes.length}</b>
          )}
        </Segment>
        {this.props.loading ? (
          <Placeholder>
            <Placeholder.Line length="full" />
            <Placeholder.Line length="full" />
            <Placeholder.Line length="full" />
            <Placeholder.Line length="full" />
          </Placeholder>
        ) : (
          <TableEpisodes episodes={this.props.podcast.episodes} />
        )}
      </div>
    );
  }
}

export default DetailsPodcast;
