import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

const Podcast = props => (
  <Link to={{
      pathname: `/podcast/${props.podcast.id.attributes["im:id"]}`,
      state: {
        podcast: props.podcast        
      }
    }}>
    <Card>
      <Image src={props.podcast["im:image"][2].label} />
      <Card.Content>
        <Card.Header>{props.podcast["im:name"].label}</Card.Header>
        <Card.Meta>
          <span>Author: {props.podcast["im:artist"].label}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  </Link>
);

export default Podcast;
