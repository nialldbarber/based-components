import React, {forwardRef, ReactElement, CSSProperties} from 'react';
import Button from '../Button/button';

export type CloseButtonPropsT = {
  dimensions?: string | number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  customStyles?: CSSProperties;
};

const CloseButton = forwardRef<HTMLDivElement, CloseButtonPropsT>(
  (
    {
      className,
      dimensions = '1rem',
      color = 'currentColor',
      strokeWidth = 0,
      customStyles,
      ...rest
    },
    ref
  ): ReactElement => {
    return (
      <div ref={ref} {...{className}} {...rest} style={customStyles}>
        <Button>
          <svg
            width={dimensions}
            height={dimensions}
            fill={color}
            stroke={color}
            strokeWidth={strokeWidth}
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </svg>
        </Button>
      </div>
    );
  }
);

export default CloseButton;
