import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {

  componentDidMount = () => {
    // TODO: eliminar el setInterval, sólo es para probar que el spinner se desactiva
    let that = this;
    setInterval(() => that.props.isLoading(false), 3000);
  };

  render() {
    return (
      <div>
        <h1>Listado de podcasts</h1>
        <Link to="/podcast/1">Podcast 1</Link>
      </div>
    );
  }
}

export default Home;
