import React from "react";
import { Menu, Loader } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../css/podcasts.css";

const PageHeader = props => (
  <Menu secondary pointing>
    <Menu.Item as={Link} to="/">
      <h1 className="ui blue header">Podcaster</h1>
    </Menu.Item>
    <Menu.Item fitted="vertically" position="right">
      <div className="podcast-spinner">
        <Loader size="small" active={props.loading} />
      </div>
    </Menu.Item>
  </Menu>
);

export default PageHeader;
