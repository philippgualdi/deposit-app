const { Marc } = require('marcjs');

export class Marc21Record {
    static leader_keys = {
        "00-04" : "length",
        "05": "status",
        "06": "type",
        "07": "level",
        "08": "control",
        "09": "charset",
        "10": "ind_count",
        "11": "sub_count",
        "12-16": "address",
        "17": "encoding",
        "18": "description",
        "19": "multipart_resource_record_level",
        "20": "length_field_position",
        "21": "length_starting_character_position_portion",
        "22": "length_implementation_defined_portion",
        "23": "undefined",
}
    static deafault_leaderfield = {
        "length" : "00000",
        "status" : "",
        "type": "a",
        "level": "m",
        "control": " ",
        "charset": "a",
        "ind_count": "2",
        "sub_count": "2",
        "address": "00000",
        "encoding": "z",
        "description": "c",
        "multipart_resource_record_level": "a",
        "length_field_position": "4",
        "length_starting_character_position_portion": "5",
        "length_implementation_defined_portion": "0",
        "undefined": "0",

     }
    /**
   *  Make sure RecordSchema called first time with props.link
   */

	constructor() {
        this.record =  Marc.parse(data, 'marcxml');
       
        
    }
    setLeaderfield(string){
        

    }
    getLeaderfield(){

    }
}