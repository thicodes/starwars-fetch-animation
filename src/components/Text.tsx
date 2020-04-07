import React from 'react';
import styled from 'styled-components';

const TextStyled = styled.p<Props>`
  color: ${props => (props.color ? props.color : '#fff')};
`;

type Props = {
  children: React.ReactNode;
  color?: string;
};

function Text({ color, children }: Props) {
  return <TextStyled color={color}>{children}</TextStyled>;
}

export default Text;
