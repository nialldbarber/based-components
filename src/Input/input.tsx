import React from 'react';

interface Props {
  text: string;
}

export default function Input({text}: Props) {
  return (
    <div>
      <span>{text}</span>
    </div>
  );
}
