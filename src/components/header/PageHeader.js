import React from "react";
import { Menu, Loader } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { withRouter} from 'react-router-dom';

class PageHeader extends React.Component {

  render() {

    this.props.history.listen( (location, action) => {
      this.props.isLoading(true);
    });

    return (
      <Menu secondary pointing>
        <Menu.Item as={Link} to="/">
          <h2 className="ui blue header">Podcaster</h2>
        </Menu.Item>
        <Menu.Item fitted="vertically" position="right">
          <Loader size="small" active={this.props.loading} />
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(PageHeader);
