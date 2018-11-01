import React from "react";
import { withRouter } from "react-router";
import { Segment } from "semantic-ui-react";

const DetailsEpisode = props => (
  <Segment>
    <h2>{props.location.state.episode.title}</h2>
    <div
      dangerouslySetInnerHTML={{
        __html: props.location.state.episode.content
      }}
    />
    <div className="ui divider" />
    <div className="ui column centered grid padded">
      <audio controls>
        <source src={props.location.state.episode.url} type="audio/ogg" />
        <source src={props.location.state.episode.url} type="audio/mpeg" />
        <source src={props.location.state.episode.url} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  </Segment>
);

export default withRouter(DetailsEpisode);
