import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

const Podcast = props => (
  <Link to={{
      pathname: `/podcast/${props.podcast.id}`,
      state: {
        podcast: props.podcast
      }
    }}>
    <Card>
      <Image src={props.podcast.img} />
      <Card.Content>
        <Card.Header>{props.podcast.name}</Card.Header>
        <Card.Meta>
          <span>Author: {props.podcast.author}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  </Link>
);

export default Podcast;
