import {classNames} from '../utils/classNames';
import React, {
  useReducer,
  useState,
  forwardRef,
  ReactElement,
  CSSProperties,
  DragEvent,
} from 'react';
import styled from 'styled-components';

export interface DragNDropListPropsT {
  listItems?: string[] | number[];
  className?: string;
  customStyles?: CSSProperties;
}

export interface DragEventsT extends DragNDropListPropsT {
  onDragEnter?: (e: DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver?: (e: DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: DragEvent<HTMLDivElement>) => void;
}

const DragDropZone = styled.div<DragEventsT>`
  padding: 2rem;
  text-align: center;
  background: #07f;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 10px #c0c0c0;

  &.inside-drag-area {
    opacity: 0.7;
  }
`;

const DroppedFiles = styled.li`
  color: red;
  padding: 3px;
  text-align: left;
  font-weight: bold;
`;

const DragNDropList = forwardRef<HTMLDivElement, DragNDropListPropsT>(
  ({className, customStyles, ...rest}, ref): ReactElement => {
    const [listItems, setListItems] = useState([]);
    const [dragStartIndex, setDragStartIndex] = useState(null);

    function createList() {}

    return (
      <DragDropZone
        ref={ref}
        className={classNames(className)}
        style={customStyles}
        {...rest}
      >
        <ol className="dropped-files">
          <DroppedFiles>sggsg</DroppedFiles>
        </ol>
      </DragDropZone>
    );
  }
);

export default DragNDropList;
