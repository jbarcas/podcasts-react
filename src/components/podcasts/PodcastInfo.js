import React from "react";
import { Card } from "semantic-ui-react";

const Description = props => (
  <div>
    <b>Description:</b>
    <div>{props.description}</div>
  </div>
);

const PodcastDetails = props => (
  <Card
    image={props.podcast.artworkUrl600}
    header={props.podcast.trackName}
    meta={"by " + props.podcast.artistName}
    extra={<Description description={props.description} />}
  />
);

export default PodcastDetails;
