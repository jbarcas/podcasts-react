import React from "react";
import { Link } from "react-router-dom";
import { Table, Pagination } from "semantic-ui-react";

const TAM_PAGE = 10;

const dateParser = dateString => {
  let milliseconds = Date.parse(dateString);
  let date = new Date(milliseconds);

  return (
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
  );
};

class TableEpisodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      init: 0,
      end: 10
    };
    this.onPageChange = this.onPageChange.bind(this);
  }

  onPageChange = (event, data) => {
    const init = (data.activePage - 1) * TAM_PAGE;
    const end = init + TAM_PAGE;
    this.setState({
      init: init,
      end: end
    });
  };

  render() {
    return (
      <div>
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={8}>Title</Table.HeaderCell>
              <Table.HeaderCell width={2}>Date</Table.HeaderCell>
              <Table.HeaderCell width={2}>Duration</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.podcast.episodes
              .slice(this.state.init, this.state.end)
              .map((episode, index) => {
                return (
                  <Table.Row key={index}>
                    <Table.Cell>
                      <Link
                        to={{
                          pathname: `${this.props.match.url}/episodes/${
                            episode.id
                          }`,
                          state: {
                            episode: episode
                          }
                        }}
                      >
                        {episode.title}
                      </Link>
                    </Table.Cell>
                    <Table.Cell>{dateParser(episode.date)}</Table.Cell>
                    <Table.Cell>{episode.duration}</Table.Cell>
                  </Table.Row>
                );
              })}
          </Table.Body>
        </Table>
        <Pagination
          className="ui right floated"
          defaultActivePage={this.state.activePage}
          totalPages={Math.ceil(this.props.podcast.episodes.length / TAM_PAGE)}
          onPageChange={this.onPageChange}
        />
      </div>
    );
  }
}

export default TableEpisodes;
