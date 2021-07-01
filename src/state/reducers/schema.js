import {
    SCHEMA_LOAD_INITIATE,
    SCHEMA_LOAD_START,
    SCHEMA_LOAD_FINISHED,
    SCHEMA_LOAD_FAILED,
  } from '../types';


export const SchemaState = {
    initial: 'initial', // no file or the initial file selected
    loading: 'loading', // currently fetch schema from api
    error: 'error', // fetch schema failed
    finished: 'finished', // fetch schema finished
  };

const initialState = {};


export default (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SCHEMA_LOAD_INITIATE:
      return {
        ...state,
        entries: {
          ...state.entries,
          [action.payload.link]: {
            link: action.payload.link,
            status: SchemaState.initial,
          },
        },
      };
    case SCHEMA_LOAD_START:
      return {
        ...state,
        entries: {
          ...state.entries,
          [action.payload.link]: {
            link: action.payload.link,
            status: SchemaState.loading,
          },
        },
      };
    default:
        return state;
  }
};