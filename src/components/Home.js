import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Listado de podcasts</h1>
    <Link to="/podcast/1">Podcast 1</Link>
  </div>
);

export default Home;
