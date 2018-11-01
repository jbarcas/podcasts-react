import React from "react";
import { Segment, Placeholder } from "semantic-ui-react";
import TableEpisodes from "./TableEpisodes";

const DetailsPodcast = props => (
  <div>
    <Segment>
      {props.loading ? (
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
        </Placeholder>
      ) : (
        <b>Episodes: {props.podcast.episodes.length}</b>
      )}
    </Segment>
    {props.loading ? (
      <Placeholder fluid>
        <Placeholder.Line length="full" />
        <Placeholder.Line length="full" />
        <Placeholder.Line length="full" />
        <Placeholder.Line length="full" />
      </Placeholder>
    ) : (
      <TableEpisodes {...props} />
    )}
  </div>
);

export default DetailsPodcast;
