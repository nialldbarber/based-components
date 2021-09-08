import React, {forwardRef, ReactElement, CSSProperties, DragEvent} from 'react';

export interface DragNDropListPropsT {
  listItems?: string[] | number[];
  className?: string;
  customStyles?: CSSProperties;
}

const DragNDropList = forwardRef<HTMLUListElement, DragNDropListPropsT>(
  ({className, customStyles, ...rest}, ref): ReactElement => {
    function handleDragEnter(e: DragEvent<HTMLUListElement>) {
      e.preventDefault();
      e.stopPropagation();
    }

    function handleDragLeave(e: DragEvent<HTMLUListElement>) {
      e.preventDefault();
      e.stopPropagation();
    }

    function handleDragOver(e: DragEvent<HTMLUListElement>) {
      e.preventDefault();
      e.stopPropagation();
    }

    function handleDragDrop(e: DragEvent<HTMLUListElement>) {
      e.preventDefault();
      e.stopPropagation();
    }

    return (
      <ul
        ref={ref}
        style={customStyles}
        {...{className}}
        {...rest}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDragDrop}
      >
        <li>hello</li>
      </ul>
    );
  }
);

export default DragNDropList;
