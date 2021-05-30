import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import MyFavoriteBooks from './myFavoriteBooks';

class Profile extends Component {
  render() {
    const { user,isAuthenticated } = this.props.auth0;
    return (
        <>
            { isAuthenticated &&
                <>
                    <div>Hello {user.name}</div>
                    <div>Email: {user.email}</div>
                    <MyFavoriteBooks/>
                </>
            }
        </>
    )
  }
}
export default withAuth0(Profile);
