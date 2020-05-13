import React from 'react';
import styled from 'styled-components';

export default () => (
  <Wrapper>
    <CenterMessage>
    Aplicativo de exemplo Next.js JsonPlaceholder de&nbsp;
      <a href="http://github.com/leandrovicente" target="_blank" rel="noopener noreferrer">
        @leandrovicente
      </a>
    </CenterMessage>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-top: 120px;
  border-top: 1px solid #EEEEEE;
`;

const CenterMessage = styled.div`
  padding: 30px 0;
  text-align: center;
  color: width;
  font-size: 12px;

  a {
    color: white;
    text-decoration: none;
  }
`;
