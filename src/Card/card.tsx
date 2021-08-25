import React, {ReactElement} from 'react';
// import {BasedButton} from './styles';
// import {SHAPE} from './constants';

export type CardPropsT = {
  text?: string;
};

function Card({text}: CardPropsT): ReactElement {
  return <div>{text}</div>;
}
export default Card;
