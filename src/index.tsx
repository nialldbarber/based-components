import React from 'react';
import styles from './styles.module.css';

interface Props {
  text: string;
  number?: number;
}

export const ExampleComponent = ({text, number}: Props) => {
  return (
    <div className={styles.test}>
      Example Component: {text} {number}
    </div>
  );
};
