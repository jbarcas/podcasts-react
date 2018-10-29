import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Description = props => (
  <div>
    <b>Description:</b>
    <div>{props.description}</div>
  </div>
);

const PodcastDetails = props => (
  <Link to={`/podcast/${props.podcast.trackId}`}>
    <Card
      image={props.podcast.artworkUrl600}
      header={props.podcast.trackName}
      meta={"by " + props.podcast.artistName}
      extra={<Description description={props.podcast.description} />}
    />
  </Link>
);

export default PodcastDetails;
