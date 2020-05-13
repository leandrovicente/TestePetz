import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Container } from '.';

const Header = () => (
  <Wrapper>
    <Fixed>
      <Container>
        <Flex>
          <Logo>
            <Link><a href="/" ><img src="https://www.petz.com.br/novaLoja/images/logo.png"></img></a></Link>
          </Logo>
          <Links>
            <a href="http://github.com/LeandroVicente/TestePetz">Github</a>
          </Links>
        </Flex>
      </Container>
    </Fixed>
  </Wrapper>
);

function paginaInicial(){
  window.location.href = window.origin
}

const Wrapper = styled.div`
  height: 90px;
`;

const Fixed = styled.div`
  width: 100%;
  height: 90px;
  line-height: 50px;
  border-bottom: 1px solid #EEE;
  background: #FFD400;
  position: fixed;
  z-index: 99;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  img {
    margin: 10px;
  }
`;

const Links = styled.div`
  a {
    color: #AAAAFF;
    transition: all 200ms ease;
    text-decoration: none;
    font-weight: 400;

    &:hover {
      opacity: 0.4;
    }

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;


export default Header;