import {
    SCHEMA_LOAD_START,
    ACTION_SAVE_SUCCEEDED,
    ACTION_SAVE_FAILED,
  } from './state/types';
import _isEmpty from 'lodash/isEmpty';
import _set from 'lodash/set';

export class Marc21Controller {
    constructor(schema) {
        this.schema = schema;
    }



  /**
   * Saves the current draft (backend) and changes URL to match its edit URL.
   *
   * @param {object} draft - current draft
   * @param {object} formik - the Formik object
   * @param {object} store - redux store
   */
  async saveDraft(draft, { formik, store }) {
    const recordSerializer = store.config.recordSerializer;

    // Set defaultPreview for files
    draft = _set(
      draft,
      'defaultFilePreview',
      store.getState().deposit.defaultFilePreview
    );

    let response = {};
    if (!this.draftAlreadyCreated(draft)) {
      response = await this.createDraft(draft, { store });
    } else {
      let payload = recordSerializer.serialize(draft);
      response = await this.apiClient.save(payload);
    }

    let data = recordSerializer.deserialize(response.data || {});
    let errors = recordSerializer.deserializeErrors(response.errors || []);

    // response 100% successful
    if ( 200 <= response.code && response.code < 300 && _isEmpty(errors) ) {
      store.dispatch({
        type: ACTION_SAVE_SUCCEEDED,
        payload: { data },
      });
    }
    // response exceptionally bad
    else {
      store.dispatch({
        type: ACTION_SAVE_FAILED,
        payload: { errors },
      });
      formik.setErrors(errors);
    }

    formik.setSubmitting(false);
  }

}