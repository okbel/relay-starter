import React from 'react';
import { graphql } from 'react-relay';
import withQuery from './hocs/withQuery';

class User extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>ID: {this.props.me.lastName}</li>
          <li>
            Name: {this.props.me.firstName} {this.props.me.lastName}
          </li>
        </ul>
      </div>
    );
  }
}

export default withQuery({
  query: graphql`
    query UserQuery {
      me {
        id
        firstName
        lastName
      }
    }
  `,
})(User);
