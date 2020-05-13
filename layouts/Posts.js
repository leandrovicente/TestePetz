// @flow

import type { Post,User } from '../utils/types';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Header, Footer, UserThumb, Container } from '../components';

type Props = {
  posts: Post[],
  users: User[]
};
let valorInput = "" 

function filtrar(thias){
  valorInput=thias
}


const posts = ({ posts,users , valorInput}: Props) => (
  <Wrapper>   
    <Header />
    <UsersContained>
    <Form>
      <input
          
          type="text"
          placeholder="Digite o Post"
          id="inputPost"
          onChange={()=>{filtrar(document.getElementById("inputPost").value)}}
      />
      <Button  onClickCapture={()=>{filtrar(document.getElementById("inputPost").value)}}>BUSCAR</Button>
    </Form>
      {posts && posts.map(post => (
        <Link href={`/posts?userId=${post.userId}&postId=${post.id}`} key={post.id}>
          <UserCard>
          <UserThumb name={users.filter(objeto => objeto.id === post.userId)[0].name} color="#3498db" />
            <UserContent className="name">
              <span>{users.filter(objeto => objeto.id === post.userId)[0].name}</span>            
              <h2>{post.title}</h2>
              <h2>{valorInput}</h2>
            </UserContent>
          </UserCard>
        </Link>

      ))}
    </UsersContained>
    <Footer />
  </Wrapper>
);

export default posts;
const Form = styled.form`
    margin-top:30px;
    display:flex;
    flex-direction:row;

    input{
        flex:1;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius:4px;
        font-size:16px;
    }
`;



const Wrapper = styled.div`
background: #3498db;
`;

const UsersContained = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const UserCard = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  border-radius: 5px;
  background: white;
  cursor: pointer;
  transition: all 400ms ease;
  margin-top: 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;

  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    transform: translate(0, -2px);
  }

  > *:not(:last-child) {
    margin-right: 20px;
  }
`;

const UserContent = styled.div`
  h2 {
    margin: 0;
    font-family: 'sans-serif';
    color: #262626;
    font-size: 17px;
  }

  span {
    color: #555;
    font-size: 14px;
    letter-spacing: 0.6px;
    padding-top: 10px;
  }
`;

const Button = styled.button`
cursor: pointer;
text-align: center;
background-color: #FFD400;
color: #FFFFFF;
margin-left: -48px;
border-radius: 0px 10px 10px 0px;

&:hover {
  background-color: #00A0E4;
}
`;

