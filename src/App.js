import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/views/Home";
import PageHeader from "./components/header/Header";
import PodcastContainer from "./components/views/PodcastContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.loading = this.loading.bind(this);
  }

  loading = isLoading => this.setState({loading: isLoading});

  render() {
    return (
      <div className="ui container">
        <PageHeader loading={this.state.loading} />
        <Route
          path="/"
          exact
          render={() => (
            <Home loading={this.state.loading} isLoading={this.loading} />
          )}
        />
        <Route
          path="/podcast/:podcastId"
          render={() => (
            <PodcastContainer
              loading={this.state.loading}
              isLoading={this.loading}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
