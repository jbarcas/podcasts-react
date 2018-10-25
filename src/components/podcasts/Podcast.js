import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Podcast = (props) => (
  <Card href={`/podcast/${props.podcast.id.attributes["im:id"]}`}>
    <Image src={props.podcast["im:image"][2].label} />
    <Card.Content>
      <Card.Header>{props.podcast["im:name"].label}</Card.Header>
      <Card.Meta>
        <span>Author: {props.podcast["im:artist"].label}</span>
      </Card.Meta>
    </Card.Content>
  </Card>
)

export default Podcast
