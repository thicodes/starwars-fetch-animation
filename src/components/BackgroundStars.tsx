import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function BackgroundStars() {
  return (
    <>
      <Stars />
      <StarsA />
      <StarsB />
    </>
  );
}

function random(max: number) {
  const min = 1;
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
}

// Original animation (https://codepen.io/saransh/pen/BKJun)

function multipleBoxShadow(n: number) {
  const value = `${random(2000)}px ${random(2000)}px #FFF`;
  return [...Array(n).keys()].map((_) => `${value} , ${random(2000)}px ${random(2000)}px #FFF`).join(', ');
}

const shadowsSmall = multipleBoxShadow(700);
const shadowsMedium = multipleBoxShadow(200);
const shadowsBig = multipleBoxShadow(100);

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;

const Stars = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${shadowsSmall};
  animation: ${animStar} 100s linear infinite;

  &:after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${shadowsSmall};
  }
`;

const StarsA = styled.div`
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${shadowsMedium};
  animation: ${animStar} 100s linear infinite;

  &:after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${shadowsMedium};
  }
`;

const StarsB = styled.div`
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${shadowsBig};
  animation: ${animStar} 150s linear infinite;

  &:after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${shadowsBig};
  }
`;
