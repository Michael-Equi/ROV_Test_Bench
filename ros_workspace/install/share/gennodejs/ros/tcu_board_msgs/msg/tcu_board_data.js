// Auto-generated. Do not edit!

// (in-package tcu_board_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class tcu_board_data {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.tempC = null;
      this.humidity = null;
      this.currentMA = null;
      this.voltage = null;
    }
    else {
      if (initObj.hasOwnProperty('tempC')) {
        this.tempC = initObj.tempC
      }
      else {
        this.tempC = 0.0;
      }
      if (initObj.hasOwnProperty('humidity')) {
        this.humidity = initObj.humidity
      }
      else {
        this.humidity = 0.0;
      }
      if (initObj.hasOwnProperty('currentMA')) {
        this.currentMA = initObj.currentMA
      }
      else {
        this.currentMA = 0.0;
      }
      if (initObj.hasOwnProperty('voltage')) {
        this.voltage = initObj.voltage
      }
      else {
        this.voltage = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type tcu_board_data
    // Serialize message field [tempC]
    bufferOffset = _serializer.float32(obj.tempC, buffer, bufferOffset);
    // Serialize message field [humidity]
    bufferOffset = _serializer.float32(obj.humidity, buffer, bufferOffset);
    // Serialize message field [currentMA]
    bufferOffset = _serializer.float32(obj.currentMA, buffer, bufferOffset);
    // Serialize message field [voltage]
    bufferOffset = _serializer.float32(obj.voltage, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type tcu_board_data
    let len;
    let data = new tcu_board_data(null);
    // Deserialize message field [tempC]
    data.tempC = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [humidity]
    data.humidity = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [currentMA]
    data.currentMA = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [voltage]
    data.voltage = _deserializer.float32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 16;
  }

  static datatype() {
    // Returns string type for a message object
    return 'tcu_board_msgs/tcu_board_data';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'bdb48909d88ffd8a6589dd5f63593bf1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 tempC
    float32 humidity
    float32 currentMA
    float32 voltage
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new tcu_board_data(null);
    if (msg.tempC !== undefined) {
      resolved.tempC = msg.tempC;
    }
    else {
      resolved.tempC = 0.0
    }

    if (msg.humidity !== undefined) {
      resolved.humidity = msg.humidity;
    }
    else {
      resolved.humidity = 0.0
    }

    if (msg.currentMA !== undefined) {
      resolved.currentMA = msg.currentMA;
    }
    else {
      resolved.currentMA = 0.0
    }

    if (msg.voltage !== undefined) {
      resolved.voltage = msg.voltage;
    }
    else {
      resolved.voltage = 0.0
    }

    return resolved;
    }
};

module.exports = tcu_board_data;
