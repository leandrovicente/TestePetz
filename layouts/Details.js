// @flow

import type { Post, User } from '../utils/types';
import React from 'react';
import styled from 'styled-components';
import { Header, Footer, Container } from '../components';
import { capitalizefl } from '../utils';
import Link from 'next/link';
import api from '../services/api';

function remove(data) {
  api.delete(`/posts/${data}`);
  window.location.href = window.origin
}

export default ({ posts, user }: Props) => (
  <Wrapper>
  
    <Header />
   
    <PostsContained>
   
      <Title>
        <span>posts from</span>
        <h1>{user.name}</h1>
      </Title>

        <PostContent>
          <h2>{capitalizefl(posts.title)}.</h2>
          <p>{capitalizefl(posts.body)}.</p>
        </PostContent>
        <Button type="button" onClick={ () => remove(posts.id)  } >
            Deletar
     </Button>
    </PostsContained>
    
    <Footer />
  </Wrapper>
);

const Wrapper = styled.div`
background: #3498db;
`;

const Title = styled.div`
  margin-top: 60px;
  margin-bottom: 20px;
  text-align: center;
  position: relative;

  @media (min-width: 600px) {
    &:before, &:after {
      content: "";
      position: absolute;
      display: inline-block;
      vertical-align: middle;
      width: 46px;
      height: 1px;
      background: #eee;
      margin: 0 30px;
      left: 0;
      top: 50%;
    }

    &:after {
      left: auto;
      right: 0;
    }
  }

  span {
    font-size: 12px;
    color: #555;
    font-style: italic;
    letter-spacing: 2px;
  }

  h1 {
    font-family: 'IM Fell Double Pica';
    color: white;
    text-align: center;
    font-weight: italic;
    font-weight: normal;
    margin: 0;
    font-size: 38px;
  }
`;

const PostsContained = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PostContent = styled.div`
  margin-top: 30px;
  color: #888;

  h2 {
    color: #262626;
    font-family: 'Sansita';
    font-size: 30px;
    line-height: 1.1em;
    letter-spacing: 1px;
  }

  p {
    letter-spacing: 0.3px;
    line-height: 1.42em;
    font-size: 18px;
    color: white;
  }
`;
const Button = styled.button`
cursor: pointer;
text-align: center;
background-color: #ff5200;
color: #FFFFFF;
border-color: #6e6e6e;
width: 58px;
&:hover {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    transform: translate(0, -2px);
  background-color: red;
}
`;