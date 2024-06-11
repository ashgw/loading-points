import React from 'react';
import styled from 'styled-components';

const Dot = styled.div<{ glowColor?: RGB; circleSize?: Pixel; delay?: string }>`
  width: ${(props) => props.circleSize || '8px'};
  height: ${(props) => props.circleSize || '8px'};
  border-radius: 50%;
  display: inline-block;
  margin: 0.5rem;
  background-color: ${(props) => props.glowColor || 'rgb(155, 46, 199)'};
  box-shadow: 0 0 20px ${(props) => props.glowColor || 'rgb(155, 46, 199)'};
  animation: loading 1.5s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || '0s'};

  @keyframes loading {
    0%,
    100% {
      transform: scale(0.2);
      box-shadow: 0 0 10px rgba(255, 0, 0, 0.886);
    }
    42% {
      box-shadow: 0 0 10px rgba(204, 6, 118, 0.886);
    }
    50% {
      transform: scale(1);
      box-shadow:
        0 0 20px ${(props) => props.glowColor || 'rgb(155, 46, 199)'},
        0 0 30px ${(props) => props.glowColor || 'rgb(155, 46, 199)'},
        0 0 40px ${(props) => props.glowColor || 'rgb(155, 46, 199)'};
    }
  }
`;

declare const __s: unique symbol;
type _Brand<N, T> = T & {
  [__s]: N;
};

export type RGB = _Brand<'RBG', string>;
export type Pixel = _Brand<'Pixel', string>;

interface DotsProps {
  glowColor?: RGB;
  circleSize?: Pixel;
}

export interface LoaderProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    DotsProps {}

const Loading: React.FC<LoaderProps> = ({ glowColor, circleSize }) => {
  const renderDivs = () => {
    return (
      <>
        <Dot glowColor={glowColor} circleSize={circleSize} delay="0s" />
        <Dot glowColor={glowColor} circleSize={circleSize} delay="0.2s" />
        <Dot glowColor={glowColor} circleSize={circleSize} delay="0.3s" />
      </>
    );
  };

  return renderDivs();
};

export default Loading;
