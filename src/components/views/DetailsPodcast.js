import React from "react";
import { Link } from "react-router-dom";

class DetailsPodcast extends React.Component {

  componentDidMount = () => {
    // TODO: eliminar el setInterval, sólo es para probar que el spinner se desactiva
    let that = this;
    setInterval(() => that.props.isLoading(false), 3000);
  };

  render() {
    return (
      <div>
        <h2>Detalles del podcast 1</h2>
        <Link to="/podcast/1/episodes/1">Episodio 1</Link>
      </div>
    );
  }
}

export default DetailsPodcast;
