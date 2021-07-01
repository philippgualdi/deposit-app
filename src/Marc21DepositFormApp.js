// This file is part of React-Invenio-Deposit
// Copyright (C) 2020 CERN.
// Copyright (C) 2020 Northwestern University.
//
// React-Invenio-Deposit is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import React, { Component } from "react";
import { Provider } from 'react-redux';
import { BaseForm } from "react-invenio-forms";
import { configureStore } from "./store";
import {RecordSchema} from "./RecordSchema";
import { Marc21Controller } from './Marc21Controller';
export class Marc21DepositFormApp extends Component {
  constructor(props) {
    super(props);
    const apiClient = props.apiClient 
    const fileUploader = props.fileUploader
    //const controller = props.controller
    //const recordSerializer = props.recordSerializer;

    const schema = props.schema
      ? props.schema
      : new RecordSchema(props.config.link, props.config.schema);
    //schema.setSchema()

    const controller = props.controller
      ? props.controller
      : new Marc21Controller(schema);


    const appConfig = {
      config: props.config,
      //record: recordSerializer.deserialize(props.record),
      files: props.files,
      controller: controller,
      apiClient: apiClient,
      fileUploader: fileUploader,
      //permissions: props.permissions,
      //recordSerializer: recordSerializer,
    };

    this.store = configureStore(appConfig);
  }

  render() {
    return (
      <Provider store={this.store}>
        <BaseForm
          onSubmit={this.props.submitFormData}
          formik={{
            enableReinitialize: true,
            initialValues: this.props.record,
          }}
        >
          {this.props.children}
        </BaseForm>
      </Provider>
    );
  }
}

Marc21DepositFormApp.propTypes = {};
