// This file is part of Invenio-Records-Marc21.
// Copyright (C) 2021 Graz University of Technology.
//
// Invenio-Records-Marc21 is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import _get from "lodash/get";
import React, { Component, createRef }  from "react";

import {
  DepositFormTitle,
  FileUploader,
  PublishButton,
  SaveButton,
} from "react-invenio-deposit";
import { AccordionField } from "react-invenio-forms";
import { Card, Container, Grid, Ref, Sticky } from "semantic-ui-react";
import {Marc21DepositFormApp} from "./Marc21DepositFormApp";


import { Marc21Metadata } from "./components/metadata/Marc21Metadata";

export class Marc21DepositForm extends Component {

	constructor(props) {
    super(props);
    this.props = props
    this.config = props.config || {};

    this.noFiles = false;

	}

  sidebarRef = createRef();

  accordionStyle = {
    header: { className: "segment-header inverted" },
  };

  render() {
    return (
      <Marc21DepositFormApp
        config={this.config}
        record={this.props.record}
        files={this.props.files}
      //permissions={this.props.permissions} 
      >
        <Container style={{ marginTop: "10px" }}>
        {/* <DepositFormTitle /> */}
        <Grid>
        	<Grid.Row>
            <Grid.Column width={11}>
              <AccordionField
                fieldPath=""
                active={true}
                label={"Files"}
                ui={this.accordionStyle}>

                {/* <FileUploader
                //TODO: record set is_published  
                  isDraftRecord={true}
                  quota={{
                    maxFiles: 100,
                    maxStorage: 10 ** 10,
                  }}
                /> */}
              </AccordionField>

              <AccordionField
                  fieldPath=""
                  active={false}
                  label={"Record information"}
                  ui={this.accordionStyle}
                  >
                  {/* 
                    TODO: add:
                      creators 
                      access rights
                  */}
              </AccordionField>

              <AccordionField
                fieldPath=""
                active={true}
                label={"Metadata"}
                ui={this.accordionStyle}>
                  <Marc21Metadata 
                  config={this.config}/>
              </AccordionField>

            </Grid.Column>
            <Ref innerRef={this.sidebarRef}>
              <Grid.Column width={5} className="deposit-sidebar">
              
                <Card className="actions">
                  {/* <Card.Content>
                    <div className="sidebar-buttons">
                      <SaveButton fluid className="save-button" />
                    </div>
                    <PublishButton fluid />
                  </Card.Content> */}
                </Card>
                <Sticky context={this.sidebarRef} offset={10}>
                <Card className="shortcuts">
                   TODO: Metadata Shortcuts
                  <Card.Content>
                    <div className="sidebar-shortcuts">
                      No shortcuts defined!
                    </div>
                  </Card.Content>
                </Card> 
                </Sticky>
              </Grid.Column>
            </Ref>
          </Grid.Row>
				</Grid>
				</Container>
      </Marc21DepositFormApp>
		)
	}
}
