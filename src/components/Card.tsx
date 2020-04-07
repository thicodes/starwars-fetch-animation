import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
  color: #4a5b9a;
  padding: 25px;
  border: 1px solid #4a4a4a;
  border-radius: 7px;
`;

function Card(props: any) {
  return <CardStyled {...props} />;
}

export default Card;
