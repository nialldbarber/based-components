import React, {ReactElement, CSSProperties} from 'react';
import Button from '../Button/button';

export type CloseButtonPropsT = {
  className?: string;
  customStyles?: CSSProperties;
};

const CloseButton = React.forwardRef<HTMLDivElement, CloseButtonPropsT>(
  ({className, customStyles, ...rest}, ref): ReactElement => {
    return (
      <div ref={ref} {...{className}} {...rest} style={customStyles}>
        <Button>
          <svg
            width="1rem"
            height="1rem"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0"
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
