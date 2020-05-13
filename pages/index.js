// @flow

import React, { Component } from 'react';
import { Page } from '../components';
import { Posts } from '../layouts';
import { api } from '../utils';

class IndexPage extends Component {
  static async getInitialProps() {
    const posts = await api.getPosts();
    const users = await api.getUsers();
    return {
      posts: posts.data,
      users: users.data
    };
  }

  render() {
    return (
      <Page>
        <Posts {...this.props} />
      </Page>
    );
  }
}

export default IndexPage;
