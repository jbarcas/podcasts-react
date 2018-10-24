import React from "react";
import { Link } from "react-router-dom";

const DetailsPodcast = () => (
  <div>
    <h2>Detalles del podcast 1</h2>
    <Link to="/podcast/1/episodes/1">Episodio 1</Link>
  </div>
);

export default DetailsPodcast;
