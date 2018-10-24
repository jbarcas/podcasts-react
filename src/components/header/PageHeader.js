import React from "react";
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const PageHeader = () => (
  <Menu secondary pointing>
    <Menu.Item as={Link} to="/"><h2 class="ui blue header">Podcaster</h2></Menu.Item>
  </Menu>
);

export default PageHeader;
