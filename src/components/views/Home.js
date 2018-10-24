import React from "react";
import { Link } from "react-router-dom";
import api from "../../api";

class Home extends React.Component {
  state = {
    podcasts: []
  };

  componentDidMount = () => {
    api.podcasts.getAll().then(podcasts => {
      this.setState({ podcasts: podcasts });
      this.props.isLoading(false);
    });
  };

  render() {
    return (
      <div>
        <h1>Listado de podcasts</h1>
        <ul>
          {this.state.podcasts.map(podcast => {
            return (
              <li key={podcast.id.attributes["im:id"]}>
                <Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
                  {podcast.title.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
