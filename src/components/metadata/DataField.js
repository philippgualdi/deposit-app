// This file is part of Invenio-Records-Marc21.
// Copyright (C) 2021 Graz University of Technology.
//
// Invenio-Records-Marc21 is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.


import _get from "lodash/get";
import React, { Component }  from "react";
import { Grid, Dropdown , Segment} from "semantic-ui-react";
import { SubFields }  from "./SubField";


const testOptions = [
    { key: '100', value: '100', text: '100', helper: "Main Entry-Personal Name"},
    { key: '200', value: '200', text: '200', helper: "Main Entry-Personal Name"},
    { key: '300', value: '300', text: '300', helper: "Main Entry-Personal Name"},
  ]

const DataFieldDropdown = () => (
  <Dropdown
    inline
    clearable
    fluid
    compact
    //loading
    search
    selection
    options={testOptions}
  />
)

export default DataFieldDropdown

export class DataField extends Component {

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
          <Grid className="datafield"> 
            <Grid.Row>
              <Grid.Column width={2} >
                  <DataFieldDropdown placeholder="Tag"/>
              </Grid.Column>
              <Grid.Column width={2}>
                <DataFieldDropdown placeholder="Ind1"/>
              </Grid.Column>
              <Grid.Column width={2}>
                <DataFieldDropdown placeholder="Ind1"/>
              </Grid.Column>
              <Grid.Column width={10}>
                <SubFields/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        );
    }
}


export class DataFieldsForm extends Component {

}


export class DataFields extends Component {

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
          <Segment><DataField/></Segment> 
        );
    }
}