import React from "react";

class DetailsEpisode extends React.Component {

  componentDidMount = () => {
    // TODO: eliminar el setInterval, sólo es para probar que el spinner se desactiva
    let that = this;
    setInterval(() => that.props.isLoading(false), 3000);
  };

  render() {
    return (
      <div>
        <h2>Detalles del episodio 1</h2>
        <h3>Nombre del episodio</h3>
        <div>
          <span>Descripción del episodio 1</span>
        </div>
        <div>
          <span>Reproductor</span>
        </div>
      </div>
    );
  }
}

export default DetailsEpisode;
