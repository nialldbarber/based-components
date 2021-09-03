import React, {forwardRef, ReactNode, ReactElement} from 'react';

export type CardPropsT = {
  header?: string;
  avatar?: string;
  children?: ReactNode;
};

const Card = forwardRef<HTMLDivElement, CardPropsT>(
  ({header, avatar, children, ...rest}, ref): ReactElement => {
    return (
      <div {...rest} ref={ref}>
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
);

export default Card;
