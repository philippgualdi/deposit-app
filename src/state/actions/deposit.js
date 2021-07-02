import {
    ACTION_SAVE_SUCCEEDED,
    ACTION_SAVE_FAILED,
    FORM_SAVING,
    FORM_ACTION_EVENT_EMITTED,
  } from '../types';
  
export const save = (record, formik) => {
    return async (dispatch, getState, config) => {
      const controller = config.controller;
      controller.saveDraft(record, {
        formik,
        store: { dispatch, getState, config },
      });
    };
  };
  


export const submitAction = (action, event, formik) => {
    return async (dispatch, getState, config) => {
      dispatch({
        type: FORM_ACTION_EVENT_EMITTED,
        payload: action,
      });
      formik.handleSubmit(event); // eventually calls submitFormData below
    };
};