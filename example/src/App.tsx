import React, {useState} from 'react';
import {Input, Button} from 'based-components';
import {MdFingerprint, MdFavoriteBorder} from 'react-icons/md';

const styles = {
  backgroundColor: 'dodgerblue',
};

export default function App() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Input text="hello" />
      <Button text="hi hi" />
      <Button text="helloooo" shape="pill" />
      <Button text=">" shape="default" isLoading />
      <Button text="Blloooo" customStyles={styles} />
      <Button shape="pill" onClick={() => alert('clicked!')}>
        <span>Click me!</span>
      </Button>
      <Button
        iconPre={<MdFingerprint />}
        text="icons"
        iconEnd={<MdFavoriteBorder />}
      />

      <Button
        text="active"
        isActive={active}
        onClick={() => setActive(!active)}
        customStyles={styles}
      />
    </>
  );
}
