// This file is part of React-Invenio-Forms
// Copyright (C) 2021 Graz University of Technology
//
// Invenio-Records-Marc21 is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useFormikContext, useField } from 'formik';
import { Form } from 'semantic-ui-react';

export const Marc21DropDown = (props) => {
  const {
    values: {tag},
    touched,
    options,
    schema,
    setFieldValue,
  } = useFormikContext();
  
  console.log("Marc21DropDown")
  const [field, meta] = useField(props);
  console.log("Marc21DropDown useField")
  
  React.useEffect(() => {
    // set the value of textC, based on textA and textB
    //setFieldValue(props.name);
    if (true) {
      setFieldValue(props.name, `tag: ${tag}`);
    }
    console.log("Dropdown useEffect ")
  }, [tag, props.name]);

  return (
    <Form.Dropdown
      placeholder="Code"
      //inline
      clearable
      search
      selection
      fluid
     
      // onBlur={handleBlur}
      // onChange={(event, data) => {
      //   if (onChange) {
      //     onChange({ event, data, formikProps });
      //   } 
      // }
      options={options}
      //value={value}
      {...props}
    />
  );
};

Marc21DropDown.propTypes = {
  schema: PropTypes.object.isRequired,
  tag: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
};

Marc21DropDown.defaultProps = {
  placeholder: "Test",
  key:'',
};
