// Auto-generated. Do not edit!

// (in-package rov_control_interface.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class rov_sensitivity {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.l_scale = null;
      this.a_scale = null;
      this.v_scale = null;
    }
    else {
      if (initObj.hasOwnProperty('l_scale')) {
        this.l_scale = initObj.l_scale
      }
      else {
        this.l_scale = 0.0;
      }
      if (initObj.hasOwnProperty('a_scale')) {
        this.a_scale = initObj.a_scale
      }
      else {
        this.a_scale = 0.0;
      }
      if (initObj.hasOwnProperty('v_scale')) {
        this.v_scale = initObj.v_scale
      }
      else {
        this.v_scale = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type rov_sensitivity
    // Serialize message field [l_scale]
    bufferOffset = _serializer.float64(obj.l_scale, buffer, bufferOffset);
    // Serialize message field [a_scale]
    bufferOffset = _serializer.float64(obj.a_scale, buffer, bufferOffset);
    // Serialize message field [v_scale]
    bufferOffset = _serializer.float64(obj.v_scale, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type rov_sensitivity
    let len;
    let data = new rov_sensitivity(null);
    // Deserialize message field [l_scale]
    data.l_scale = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [a_scale]
    data.a_scale = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [v_scale]
    data.v_scale = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 24;
  }

  static datatype() {
    // Returns string type for a message object
    return 'rov_control_interface/rov_sensitivity';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '00b658ca86463c93197e8e9aac68e5df';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    float64 l_scale
    float64 a_scale
    float64 v_scale
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new rov_sensitivity(null);
    if (msg.l_scale !== undefined) {
      resolved.l_scale = msg.l_scale;
    }
    else {
      resolved.l_scale = 0.0
    }

    if (msg.a_scale !== undefined) {
      resolved.a_scale = msg.a_scale;
    }
    else {
      resolved.a_scale = 0.0
    }

    if (msg.v_scale !== undefined) {
      resolved.v_scale = msg.v_scale;
    }
    else {
      resolved.v_scale = 0.0
    }

    return resolved;
    }
};

module.exports = rov_sensitivity;
