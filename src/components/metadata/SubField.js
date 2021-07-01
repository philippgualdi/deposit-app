// This file is part of Invenio-Records-Marc21.
// Copyright (C) 2021 Graz University of Technology.
//
// Invenio-Records-Marc21 is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import _get from "lodash/get";
import React, { Component }  from "react";
import { Grid, Input, Dropdown, Button, Icon, Segment } from "semantic-ui-react";



const testOptions = [
  { key: '01', value: '01', text: '001' },
  { key: '02', value: '02', text: '00' },
  { key: '03', value: '03', text: 'Test 3' },
]

const SubFieldCode = ({subplaceholder}) => (
  <Dropdown
    inline
    clearable
    fluid
    search
    selection
    placeholder={subplaceholder}
    options={testOptions}
  />
)

export default SubFieldCode

export class SubField extends Component {

	constructor(props) {
    super(props);

    this.config = props.config || {};
	}

    render() {
      const {
        fieldPath,
        formik,  // this is our access to the shared current draft
        labelIcon,
      } = this.props;
        return (
          <Grid className={"subfield"}>
            <Grid.Row>
              <Grid.Column width={3}>
              <SubFieldCode  subplaceholder="Code"/>
              </Grid.Column>
              <Grid.Column width={11}>
              <Input placeholder="Value"></Input>
              </Grid.Column>
              <Grid.Column width={1}>
              <Button circular compact basic icon>
                <Icon name="add square"/>
              </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          
        );
    }
}


export class SubFields extends Component {

	constructor(props) {
    super(props);

    this.config = props.config || {};
	}

    render() {
        const {
          fieldPath,
          formik,
          active,
        } = this.props;
        return (
          <Segment><SubField/></Segment>
        );
    }
}