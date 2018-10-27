import React from "react";
import { Segment } from "semantic-ui-react";
import { withRouter } from "react-router";
import TableEpisodes from "./TableEpisodes";

class DetailsPodcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      podcast: {}
    };
  }

  componentDidMount = () => {};

  render() {
    return (
      <div>
        <Segment><b>Episodes: </b></Segment>
        <TableEpisodes />
      </div>
    );
  }
}

export default withRouter(DetailsPodcast);
