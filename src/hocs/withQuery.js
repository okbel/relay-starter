import React from 'react';
import { QueryRenderer } from 'react-relay';

import environment from '../environment';

export default ({ query }) => (WrappedComponent) => {
  return class WithQuery extends React.Component {
    render() {
      return (
        <QueryRenderer
          environment={environment}
          query={query}
          render={({ error, props }) => {
            if (error) {
              return <div>Error! </div>;
            }

            if (props) {
              return <WrappedComponent {...props} />;
            }

            return <div>Loading!</div>;
          }}
        />
      );
    }
  };
};
