import React from "react";
import { withRouter } from "react-router";
import { Segment } from "semantic-ui-react";

class DetailsEpisode extends React.Component {
  render() {
    return (
      <Segment>
        <h2>{this.props.location.state.episode.title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: this.props.location.state.episode.content
          }}
        />
        <div className="ui divider" />
        <div className="ui column centered grid padded">
          <audio controls>
            <source
              src={this.props.location.state.episode.url}
              type="audio/ogg"
            />
            <source
              src={this.props.location.state.episode.url}
              type="audio/mpeg"
            />
            <source
              src={this.props.location.state.episode.url}
              type="audio/mp3"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      </Segment>
    );
  }
}

export default withRouter(DetailsEpisode);
