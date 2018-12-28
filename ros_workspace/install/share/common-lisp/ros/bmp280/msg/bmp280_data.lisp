; Auto-generated. Do not edit!


(cl:in-package bmp280-msg)


;//! \htmlinclude bmp280_data.msg.html

(cl:defclass <bmp280_data> (roslisp-msg-protocol:ros-message)
  ((header
    :reader header
    :initarg :header
    :type std_msgs-msg:Header
    :initform (cl:make-instance 'std_msgs-msg:Header))
   (tempC
    :reader tempC
    :initarg :tempC
    :type cl:float
    :initform 0.0)
   (pressureP
    :reader pressureP
    :initarg :pressureP
    :type cl:float
    :initform 0.0)
   (pressureA
    :reader pressureA
    :initarg :pressureA
    :type cl:float
    :initform 0.0)
   (altitudeM
    :reader altitudeM
    :initarg :altitudeM
    :type cl:float
    :initform 0.0))
)

(cl:defclass bmp280_data (<bmp280_data>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <bmp280_data>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'bmp280_data)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name bmp280-msg:<bmp280_data> is deprecated: use bmp280-msg:bmp280_data instead.")))

(cl:ensure-generic-function 'header-val :lambda-list '(m))
(cl:defmethod header-val ((m <bmp280_data>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bmp280-msg:header-val is deprecated.  Use bmp280-msg:header instead.")
  (header m))

(cl:ensure-generic-function 'tempC-val :lambda-list '(m))
(cl:defmethod tempC-val ((m <bmp280_data>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bmp280-msg:tempC-val is deprecated.  Use bmp280-msg:tempC instead.")
  (tempC m))

(cl:ensure-generic-function 'pressureP-val :lambda-list '(m))
(cl:defmethod pressureP-val ((m <bmp280_data>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bmp280-msg:pressureP-val is deprecated.  Use bmp280-msg:pressureP instead.")
  (pressureP m))

(cl:ensure-generic-function 'pressureA-val :lambda-list '(m))
(cl:defmethod pressureA-val ((m <bmp280_data>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bmp280-msg:pressureA-val is deprecated.  Use bmp280-msg:pressureA instead.")
  (pressureA m))

(cl:ensure-generic-function 'altitudeM-val :lambda-list '(m))
(cl:defmethod altitudeM-val ((m <bmp280_data>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bmp280-msg:altitudeM-val is deprecated.  Use bmp280-msg:altitudeM instead.")
  (altitudeM m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <bmp280_data>) ostream)
  "Serializes a message object of type '<bmp280_data>"
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'header) ostream)
  (cl:let ((bits (roslisp-utils:encode-double-float-bits (cl:slot-value msg 'tempC))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 32) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 40) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 48) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 56) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-double-float-bits (cl:slot-value msg 'pressureP))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 32) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 40) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 48) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 56) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-double-float-bits (cl:slot-value msg 'pressureA))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 32) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 40) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 48) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 56) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-double-float-bits (cl:slot-value msg 'altitudeM))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 32) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 40) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 48) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 56) bits) ostream))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <bmp280_data>) istream)
  "Deserializes a message object of type '<bmp280_data>"
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'header) istream)
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 32) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 40) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 48) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 56) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'tempC) (roslisp-utils:decode-double-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 32) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 40) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 48) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 56) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'pressureP) (roslisp-utils:decode-double-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 32) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 40) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 48) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 56) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'pressureA) (roslisp-utils:decode-double-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 32) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 40) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 48) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 56) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'altitudeM) (roslisp-utils:decode-double-float-bits bits)))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<bmp280_data>)))
  "Returns string type for a message object of type '<bmp280_data>"
  "bmp280/bmp280_data")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'bmp280_data)))
  "Returns string type for a message object of type 'bmp280_data"
  "bmp280/bmp280_data")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<bmp280_data>)))
  "Returns md5sum for a message object of type '<bmp280_data>"
  "c5e4218ec509085711881fab8b571873")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'bmp280_data)))
  "Returns md5sum for a message object of type 'bmp280_data"
  "c5e4218ec509085711881fab8b571873")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<bmp280_data>)))
  "Returns full string definition for message of type '<bmp280_data>"
  (cl:format cl:nil "Header header~%~%float64 tempC~%float64 pressureP~%float64 pressureA~%float64 altitudeM~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%# 0: no frame~%# 1: global frame~%string frame_id~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'bmp280_data)))
  "Returns full string definition for message of type 'bmp280_data"
  (cl:format cl:nil "Header header~%~%float64 tempC~%float64 pressureP~%float64 pressureA~%float64 altitudeM~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%# 0: no frame~%# 1: global frame~%string frame_id~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <bmp280_data>))
  (cl:+ 0
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'header))
     8
     8
     8
     8
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <bmp280_data>))
  "Converts a ROS message object to a list"
  (cl:list 'bmp280_data
    (cl:cons ':header (header msg))
    (cl:cons ':tempC (tempC msg))
    (cl:cons ':pressureP (pressureP msg))
    (cl:cons ':pressureA (pressureA msg))
    (cl:cons ':altitudeM (altitudeM msg))
))
