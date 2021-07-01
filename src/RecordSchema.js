// This file is part of Invenio-Records-Marc21.
// Copyright (C) 2021 Graz University of Technology.
//
// Invenio-Records-Marc21 is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import _get from "lodash/get";
import _has from "lodash/has";
import axios from 'axios';

export class RecordSchema {

  /**
   *  Make sure RecordSchema called first time with props.link
   */

	constructor(link, schema) {
      this.schema = {}
      this.link = link;
      this.leader_field = "LDR";
      if (schema !== {}){
        this.setSchema(schema);
        this.loaded = true;
      } else {
        this.loaded = false;
      }
      console.log(this.schema)
	}

  isReady(){
    return this.loaded;
  }

  setSchema(schema){
    this.schema = schema;
  }

  loadSchema() {
    axios.get(this.state.link).then(
      result => {
        this.loaded =  true;
        this.schema = result.data;
        console.log(this.schema);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        this.loaded =  false;
        this.schema = {};
        this.error = error;
      }
    );
  }

  isLeaderField(key){
    let keys = this.getLeaderFieldKeys();
    return keys.includes(key);
  }

  isDataField(key){
    let keys = this.getDataFieldKeys();
    return keys.includes(key);
  }

  hasLeaderKey(key) {
    return _has(this.schema, ["fields", this.leader_field, "positions", key])
  }

  getLeaderFieldKeys() {

    let fields = this.getLeaderFields();
    let keys = []
    for (const [key, value] of Object.entries(fields)) {
      //console.log(`${key}: ${value}`);
      keys.push(key);
    }
    return keys;
  }

  getLeaderFields() {
    return _get(this.schema, ["fields", this.leader_field, "positions"], {});
  }

  getLeaderField(key) {
    const leaderfields = this.getLeaderFields();
    return leaderfields[key];
  }


  getLeaderFieldOptions(key) {
    const leaderfield = this.getLeaderField(key);
    const leaderfield_codes = _get(leaderfield, ["codes"], {});
    let codes = []
    for (const [key, value] of Object.entries(leaderfield_codes)) {
      let code = { label: key, value: value}
      codes.push(code);
    }
    return codes;
  }

  getDataFields() {
    return _get(this.schema, ["fields"], {});
  }


  getDataFieldKeys() {
    let fields = this.getDataFields();
    let keys = []
    for (const [key, value] of Object.entries(fields)) {
      //console.log(`${key}: ${value}`);
      keys.push(key);
    }
    return keys;
  }

  getDataField(key) {
    const datafield = this.getDataFields();
    return datafield[key];
  }

  /**
   * Finds tag and indicator position select options
   *
   * @param {string} key - tag key name
   * @param {string} ind - indicator key name
   */
  getDataFieldOptions(key, ind) {
    let codes = []
    const datafield = this.getDataField(key);
    if (datafield[ind] === null) {
      return codes;
    }
    const datafield_codes = datafield[ind]["codes"];

    
    for (const [key, value] of Object.entries(datafield_codes)) {
      let code = { label: key, value: value}
      codes.push(code);
    }
    return codes;
  }

}
