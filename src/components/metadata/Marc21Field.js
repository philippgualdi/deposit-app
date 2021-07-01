// This file is part of Invenio-Records-Marc21.
// Copyright (C) 2021 Graz University of Technology.
//
// Invenio-Records-Marc21 is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import _get from "lodash/get";
import React, { Component}  from "react";
import { Grid, Icon, Button, Segment } from "semantic-ui-react";
import { RecordSchema }  from "../../RecordSchema";
import {  FieldArray } from 'formik';
import { Marc21DropDown} from "../Marc21Dropdown";
import { Marc21Text} from "../Marc21Text";
import { SubFields } from "./SubField";


const LeaderHelp = ({icon="help circle"}) => (
  <Button basic icon>
  <Icon name={icon}/>
</Button>

)



export class Marc21Field extends Component {
	constructor(props) {
    super(props);

    this.config = props.config || {};
    this.schema = new RecordSchema(props.config.link, props.config.schema);
    this.name = props.name
    this.field_schema = {}
    //this.fieldPath = "one"
    this.state = {
      tag: "",
      ind1: "",
      ind2: "",
      code: "",
      subfields: [
        "1"
      ],
      help:"", // url to help page
      isLeader: props.isLieader || true, // if true code and tag otherwise tag, ind1, ind2
      isAlphaNumeric: props.isAlphaNumeric || false,
    };
	}

  handleTagChange = (event) => {
    this.setState({ tag: event.target.value });
    if(this.schema.isLeaderField(event.target.value)) {
      this.setState({ isLeader: true });
      //load schema informations for leader fields
      this.field_schema = this.schema.getLeaderField(event.target.value);
    } else if (this.schema.isDataField(event.target.value)) {
      this.setState({ isLeader: false });
       //load schema informations for data fields
       this.field_schema = this.schema.getDataField(event.target.value);
    }
  };

  handleInd1Change = (event) => {
    this.setState({ ind1: event.target.value });
  };

  handleInd2Change = (event) => {
    this.setState({ ind2: event.target.value });
  };

  handleCodeChange = (event) => {
    this.setState({ code: event.target.value });
    return event;
  };


  generateOptions(tag, ind="indicator1"){
    let options; 
    if (this.state.isLeader) {
      options = this.schema.getLeaderFieldOptions(tag)
    } else {
      options = this.schema.getDataFieldOptions(tag, ind)
    }
    if (options.length === 0){
      return []
    }
    return options;
  }

  renderDataField(){
    return (
      <Grid className="datafield"> 
        <Grid.Row>
          <Grid.Column width={2} >
            <Marc21Text 
              placeholder="Tag"
              name="tag"
              maxLength="5"

              schema={this.schema}
              tag={this.state.tag}
              onChange={ this.handleTagChange}/>
          </Grid.Column>
          <Grid.Column width={2}>
            <Marc21DropDown 
              placeholder="Ind1"
              name="ind1"
              schema={this.schema}
              tag={this.state.ind1}
              onChange={ this.handleInd1Change}
              options={this.generateOptions(this.state.tag, "indicator1")}
            />
          </Grid.Column>
          <Grid.Column width={2}>
            <Marc21DropDown 
              placeholder="Ind2"
              name="ind2"
              schema={this.schema}
              tag={this.state.ind2}
              onChange={ this.handleInd2Change}
              options={this.generateOptions(this.state.tag, "indicator2")}/>
          </Grid.Column>
          <Grid.Column width={10}>
            <SubFields/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  renderLeaderField(){
    return (
      <Grid 
      className="leaderfield" >
      <Grid.Row>
        <Grid.Column width="2">
        <Marc21Text
          name="tag"
          maxLength="5"

          schema={this.schema}
          tag={this.state.tag}
          onChange={ this.handleTagChange}
          />
        </Grid.Column>
        <Grid.Column width="13">
          <Marc21DropDown 
            name="code"
            //placeholder={this.getLabel()}
            tag={this.state.tag}
            schema={this.schema}
            options={this.generateOptions(this.state.tag)}
            value={this.state.code}
            onChange={this.handleCodeChange}
            />
        </Grid.Column>
        <Grid.Column width="1">
          <LeaderHelp/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    );
  }

  render() {
    let field;
    if(this.state.isLeader){
      field = this.renderLeaderField();
    } else {
      field = this.renderDataField();
    }
    return (
      field
    );
  }
}


export class Marc21Fields extends Component {

	constructor(props) {
    super(props);
    this.schema = new RecordSchema(props.link, props.schema);
    this.config = props.config || {};    
    this.state = {
      fields: [
        "1"
      ]
    };
	}

  handleAddClick = () => {
    var num = this.state.fields.length + 1;
    this.setState(state => {
      const fields = state.fields.concat(num.toString(10));
      return {
        fields,
        value: num,
      };
    });
  };
  
  render() {
      return (
        <div>
          {
            this.state.fields.map((field, index) => (
              <Marc21Field 
                name={index}
                key={index}
                config={this.config} /> 
            ))
          }
          <Button 
            circular 
            icon 
            onClick={() => this.handleAddClick()}>
            <Icon name="add square"/>
          </Button>
      </div>
      );
  }
}