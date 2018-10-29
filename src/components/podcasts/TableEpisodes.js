import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Table } from "semantic-ui-react";

const dateParser = dateString => {
  let milliseconds = Date.parse(dateString);
  let date = new Date(milliseconds);

  return (
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
  );
};

class TableEpisodes extends React.PureComponent {

  render() {
    return (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Duration</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.episodes.map((episode, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell><Link to={{
                    pathname: `${this.props.match.url}/episodes/${episode.id}`,
                    state: {
                      episode: episode
                    }
                  }}>{episode.title}</Link></Table.Cell>
                <Table.Cell>{dateParser(episode.date)}</Table.Cell>
                <Table.Cell>{episode.duration}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}

export default withRouter(TableEpisodes);
