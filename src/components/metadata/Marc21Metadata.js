// This file is part of Invenio-Records-Marc21.
// Copyright (C) 2021 Graz University of Technology.
//
// Invenio-Records-Marc21 is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.


import _get from "lodash/get";
import React, { Component }  from "react";
import { Marc21Fields }  from "./Marc21Field";
import { RecordSchema }  from "../../RecordSchema";
import { Grid } from "semantic-ui-react";


export class Marc21Metadata extends Component {

	constructor(props) {
    super(props);

    this.config = props.config || {};
    this.schema = new RecordSchema(props.config.link, props.config.schema);
    
	}

  // accordionStyle = {
  //   header: { className: "", style: { cursor: "pointer" } },
  // };
  
  render() {
    return (
        <Grid className="metadata" divided='vertically'>
          <Grid.Row>
            <Grid.Column width={16}>
              <Marc21Fields 
                config={this.config}/>
              {/* <DataFields/> */}
              {/* <AccordionField
                active={true}
                label={"LeaderFields"}
                ui={this.accordionStyle}>
                <LeaderFields/>
              </AccordionField>
              <AccordionField
                active={true}
                label={"DataFields"}
                ui={this.accordionStyle}>
                <DataFields/>
              </AccordionField> */}
            </Grid.Column>
        </Grid.Row>
        </Grid>
    );
  }
}
