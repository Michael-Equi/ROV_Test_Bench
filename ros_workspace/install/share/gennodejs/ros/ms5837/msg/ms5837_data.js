// Auto-generated. Do not edit!

// (in-package ms5837.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class ms5837_data {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.tempC = null;
      this.tempF = null;
      this.depth = null;
      this.altitudeM = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('tempC')) {
        this.tempC = initObj.tempC
      }
      else {
        this.tempC = 0.0;
      }
      if (initObj.hasOwnProperty('tempF')) {
        this.tempF = initObj.tempF
      }
      else {
        this.tempF = 0.0;
      }
      if (initObj.hasOwnProperty('depth')) {
        this.depth = initObj.depth
      }
      else {
        this.depth = 0.0;
      }
      if (initObj.hasOwnProperty('altitudeM')) {
        this.altitudeM = initObj.altitudeM
      }
      else {
        this.altitudeM = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type ms5837_data
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [tempC]
    bufferOffset = _serializer.float64(obj.tempC, buffer, bufferOffset);
    // Serialize message field [tempF]
    bufferOffset = _serializer.float64(obj.tempF, buffer, bufferOffset);
    // Serialize message field [depth]
    bufferOffset = _serializer.float64(obj.depth, buffer, bufferOffset);
    // Serialize message field [altitudeM]
    bufferOffset = _serializer.float64(obj.altitudeM, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type ms5837_data
    let len;
    let data = new ms5837_data(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [tempC]
    data.tempC = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [tempF]
    data.tempF = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [depth]
    data.depth = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [altitudeM]
    data.altitudeM = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 32;
  }

  static datatype() {
    // Returns string type for a message object
    return 'ms5837/ms5837_data';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'eca2bdcabad4ac8096363838d8496716';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    
    float64 tempC
    float64 tempF
    float64 depth
    float64 altitudeM
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new ms5837_data(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.tempC !== undefined) {
      resolved.tempC = msg.tempC;
    }
    else {
      resolved.tempC = 0.0
    }

    if (msg.tempF !== undefined) {
      resolved.tempF = msg.tempF;
    }
    else {
      resolved.tempF = 0.0
    }

    if (msg.depth !== undefined) {
      resolved.depth = msg.depth;
    }
    else {
      resolved.depth = 0.0
    }

    if (msg.altitudeM !== undefined) {
      resolved.altitudeM = msg.altitudeM;
    }
    else {
      resolved.altitudeM = 0.0
    }

    return resolved;
    }
};

module.exports = ms5837_data;
