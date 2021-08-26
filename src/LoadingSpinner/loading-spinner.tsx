import React, {ReactElement} from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';

export type SizeT = {
  countBalls?: number;
  size?: number;
  ballSize?: number;
  frontColor?: string;
  backColor?: string;
  x?: number;
  y?: number;
  index?: number;
  radius?: number;
  angle?: number;
  loading?: boolean;
};

const rotate = keyframes`
  50% {
    transform: rotate(180deg) scale(1.125);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const move = ({x, y, backColor}: SizeT) => keyframes`
  0% {
    transform: translateX(${x}px) translateY(${y}px) scale(1.25) ;
  }
  5% {
    transform: translateX(${x}px) translateY(${y}px) scale(1.75);
  }
  50% {
    transform: translateX(${x}px) translateY(${y}px) scale(.25);
  }
  55% {
    background-color: ${backColor};
    transform: translateX(${x}px) translateY(${y}px) scale(1) ;
  }
`;

const Wrapper = styled.div<SizeT>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({size}) => `${size}px`};
  height: ${({size}) => `${size}px`};
  animation: ${rotate} 1.5s linear infinite;
`;

const Ball = styled.div<SizeT>`
  position: absolute;
  top: ${({size}) => `${size && size / 2}px`};
  left: ${({size}) => `${size && size / 2}px`};
  width: ${({ballSize}) => `${ballSize}px`};
  height: ${({ballSize}) => `${ballSize}px`};
  border-radius: 50%;
  background-color: ${({frontColor}) => frontColor};
  transform: translateX(${({x}) => `${x}px`}) translateY(${({y}) => `${y}px`});
  animation: ${(props: any) => move(props)} 2.5s
    cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
  animation-delay: ${({index}) => index && index * 0.2}s;
`;

const getBalls = ({
  countBalls = 7,
  radius = 30 / 2,
  angle = 360 / 7,
  frontColor,
  backColor,
  size = 30,
  ballSize = 30 / 5,
}: Partial<SizeT>) => {
  const balls = [];
  const offset = ballSize && ballSize / 2;

  for (let i = 0; i < countBalls; i += 1) {
    const y = Math.sin(angle * i * (Math.PI / 180)) * radius - offset;
    const x = Math.cos(angle * i * (Math.PI / 180)) * radius - offset;
    balls.push(
      <Ball
        frontColor={frontColor}
        backColor={backColor}
        ballSize={ballSize}
        size={size}
        x={y}
        y={x}
        key={i.toString()}
        index={i}
      />
    );
  }
  return balls;
};

const CircleSpinnerLoader = ({
  size,
  frontColor,
  backColor,
  loading,
}: SizeT): ReactElement => {
  const radius = size && size / 2;
  const countBalls = 7;
  const ballSize = size && size / 5;
  const angle = 360 / countBalls;
  return loading ? (
    <Wrapper size={size}>
      {getBalls({
        countBalls,
        radius,
        angle,
        frontColor,
        backColor,
        size,
        ballSize,
      })}
    </Wrapper>
  ) : null;
};

export default CircleSpinnerLoader;

CircleSpinnerLoader.defaultProps = {
  loading: true,
  size: 30,
  frontColor: '#D1E3E1',
  backColor: '#1A7469',
};

CircleSpinnerLoader.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  frontColor: PropTypes.string,
  backColor: PropTypes.string,
};
