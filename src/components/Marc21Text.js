// This file is part of React-Invenio-Forms
// Copyright (C) 2021 Graz University of Technology
//
// Invenio-Records-Marc21 is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FastField, Field, getIn, useField, useFormikContext } from 'formik';
import { Form } from 'semantic-ui-react';

export const Marc21Text = (props) => {
  const {
    setFieldValue,
  } = useFormikContext();

  console.log("Marc21Text")
  const [field, meta] = useField(props);

  // React.useEffect(() => {
  //   setFieldValue(props.name, textC);
  // };
  
  return (
    <Form.Input
      //id="tag" 
      placeholder="Tag"
        // // id={fieldPath}
        // // name={fieldPath}
        // onChange={formikBag.form.handleChange}
        // onBlur={formikBag.form.handleBlur}
      //value={tag}
        // {...uiProps}
      {...props}
      />
  );
};
      

// Marc21Text.propTypes = {
//   schema: PropTypes.object.isRequired,
//   placeholder: PropTypes.string,
//   width: PropTypes.number,
// };

// Marc21Text.defaultProps = {
  
// };
