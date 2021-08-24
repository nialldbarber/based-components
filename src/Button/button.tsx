import React from 'react';

interface Props {
  text: string;
}

export default function Button({text}: Props) {
  return (
    <div>
      <span>{text}</span>
    </div>
  );
}
