import {classNames} from '../utils/classNames';
import React, {
  useReducer,
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

export const SET_DROP_DEPTH = 'SET_DROP_DEPTH';
export const SET_IN_DROP_ZONE = 'SET_IN_DROP_ZONE';
export const ADD_FILE_TO_LIST = 'ADD_FILE_TO_LIST';

interface DragNDropT {
  dropDepth: number;
  isInDropZone: boolean;
  dropList: any[];
}

function dragNDropReducer(state: any, action: any) {
  switch (action.type) {
    case SET_DROP_DEPTH:
      return {
        ...state,
        dropDepth: action.dropDepth,
      };
    case SET_IN_DROP_ZONE:
      return {
        ...state,
        isInDropZone: action.isInDropZone,
      };
    case ADD_FILE_TO_LIST:
      return {
        ...state,
        dropList: state.dropList.concat(action.files),
      };
    default:
      return state;
  }
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
  ({listItems, className, customStyles, ...rest}, ref): ReactElement => {
    const [state, dispatch] = useReducer(dragNDropReducer, {
      dropDepth: 0,
      isInDropZone: false,
      dropList: listItems,
    });

    function handleDragEnter(e: DragEvent<HTMLDivElement>) {
      e.preventDefault();
      e.stopPropagation();
      dispatch({type: SET_DROP_DEPTH, dropDepth: state.dropDepth + 1});
    }

    function handleDragLeave(e: DragEvent<HTMLDivElement>) {
      e.preventDefault();
      e.stopPropagation();
      dispatch({type: SET_DROP_DEPTH, dropDepth: state.dropDepth - 1});
      if (state.dropDepth > 0) return;
      dispatch({type: SET_IN_DROP_ZONE, isInDropZone: false});
    }

    function handleDragOver(e: DragEvent<HTMLDivElement>) {
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = 'copy';
      dispatch({type: SET_IN_DROP_ZONE, isInDropZone: true});
    }

    function handleDragDrop(e: DragEvent<HTMLDivElement>) {
      e.preventDefault();
      e.stopPropagation();
      let files = [...e.dataTransfer.files];

      if (files?.length > 0) {
        const existingFiles = state.dropList.map((f: any) => f.name);
        files = files.filter((f) => !existingFiles.includes(f.name));

        dispatch({type: ADD_FILE_TO_LIST, files});
        e.dataTransfer.clearData();
        dispatch({type: SET_DROP_DEPTH, dropDepth: 0});
        dispatch({type: SET_IN_DROP_ZONE, isInDropZone: false});
      }
    }

    const dropClasses = state.isInDropZone ? 'inside-drag-area' : '';

    return (
      <DragDropZone
        ref={ref}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDragDrop}
        className={classNames(className, dropClasses)}
        style={customStyles}
        {...rest}
      >
        <ol className="dropped-files">
          {state.dropList?.map((file: any) => (
            <DroppedFiles key={file.name}>{file.name}</DroppedFiles>
          ))}
        </ol>
      </DragDropZone>
    );
  }
);

export default DragNDropList;
