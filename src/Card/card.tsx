import React, {ReactNode, ReactElement} from 'react';

export type CardPropsT = {
  header?: string;
  avatar?: string;
  children?: ReactNode;
};

function Card({header, avatar, children, ...rest}: CardPropsT): ReactElement {
  return (
    <div {...rest}>
      {header && (
        <div>
          {header}
          {avatar}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
export default Card;
