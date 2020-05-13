// @flow

import React, { Component } from 'react';
import { Page } from '../components';
import { Details } from '../layouts';
import { api } from '../utils';

class DetailsPage extends Component {
  static async getInitialProps({ query: { userId, postId } }) {
    const user = await api.getUser(userId);
    const posts = await api.getPostsByUserId(postId);


    return {
      user: user.data,
      posts: posts.data,
    };
  }

  render() {
    return (
      <Page>
        <Details {...this.props} />
      </Page>
    );
  }
}

export default DetailsPage;
