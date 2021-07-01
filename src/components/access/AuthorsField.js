// This file is part of Invenio-Records-Marc21.
// Copyright (C) 2021 Graz University of Technology.
//
// Invenio-Records-Marc21 is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import React, { Component } from 'react';
import { FieldLabel, InputField } from 'react-invenio-forms';

export class AuthorsField extends Component {
    render() {
      const { fieldPath, label, labelIcon, options, editorConfig } = this.props;

      return (
        <>
          <InputField
            fieldPath={fieldPath}
            editorConfig={editorConfig}
            label={
              <FieldLabel htmlFor={fieldPath} icon={labelIcon} label={label} />
            }
            optimized
            required
          />
        </>
      );
    }
}


AuthorsField.defaultProps = {
  fieldPath: 'access.owned_by',
  label: 'Owner',
  labelIcon: 'pencil',
  editorConfig: {},
};
