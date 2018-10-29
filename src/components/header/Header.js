import React from "react";
import { Menu, Loader } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "../../css/podcasts.css";

class PageHeader extends React.Component {
  render() {
    return (
      <Menu secondary pointing>
        <Menu.Item as={Link} to="/">
          <h1 className="ui blue header">Podcaster</h1>
        </Menu.Item>
        <Menu.Item fitted="vertically" position="right">
          <div className="podcast-spinner">
            <Loader size="small" active={this.props.loading} />
          </div>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(PageHeader);
