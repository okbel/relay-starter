import React from 'react';
import { graphql } from 'react-relay';
import withQuery from './hocs/withQuery';

class User extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>ID: {this.props.me.id}</li>
          <li>
            Name: {this.props.me.firstName} {this.props.me.lastName}
          </li>
          <li>Username: {this.props.me.username}</li>
          <li>Website: {this.props.me.website}</li>
          <li>Country: {this.props.me.country}</li>
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
        username
        website
        country
      }
    }
  `,
})(User);
