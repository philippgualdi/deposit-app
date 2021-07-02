
  import {
    FORM_ACTION_EVENT_EMITTED,
    FORM_SAVE_SUCCEEDED,
    FORM_SAVE_FAILED,
    ACTION_SAVE_SUCCEEDED,
    ACTION_SAVE_FAILED,
  } from '../types';


export default (state = {}, action) => {
    switch (action.type) {
      case FORM_ACTION_EVENT_EMITTED:
        return {
          ...state,
          formState: action.payload,
        };
      case ACTION_SAVE_SUCCEEDED:
        return {
          ...state,
          record: { ...state.record, ...action.payload.data },
          errors: {},
          formState: FORM_SAVE_SUCCEEDED,
        };
      case ACTION_SAVE_FAILED:
        return {
          ...state,
          errors: { ...action.payload.errors },
          formState: FORM_SAVE_FAILED,
        };
      default:
        return state;
    }
  };
  