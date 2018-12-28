; Auto-generated. Do not edit!


(cl:in-package tcu_board_msgs-msg)


;//! \htmlinclude tcu_board_data.msg.html

(cl:defclass <tcu_board_data> (roslisp-msg-protocol:ros-message)
  ((tempC
    :reader tempC
    :initarg :tempC
    :type cl:float
    :initform 0.0)
   (humidity
    :reader humidity
    :initarg :humidity
    :type cl:float
    :initform 0.0)
   (currentMA
    :reader currentMA
    :initarg :currentMA
    :type cl:float
    :initform 0.0)
   (voltage
    :reader voltage
    :initarg :voltage
    :type cl:float
    :initform 0.0))
)

(cl:defclass tcu_board_data (<tcu_board_data>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <tcu_board_data>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'tcu_board_data)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name tcu_board_msgs-msg:<tcu_board_data> is deprecated: use tcu_board_msgs-msg:tcu_board_data instead.")))

(cl:ensure-generic-function 'tempC-val :lambda-list '(m))
(cl:defmethod tempC-val ((m <tcu_board_data>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader tcu_board_msgs-msg:tempC-val is deprecated.  Use tcu_board_msgs-msg:tempC instead.")
  (tempC m))

(cl:ensure-generic-function 'humidity-val :lambda-list '(m))
(cl:defmethod humidity-val ((m <tcu_board_data>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader tcu_board_msgs-msg:humidity-val is deprecated.  Use tcu_board_msgs-msg:humidity instead.")
  (humidity m))

(cl:ensure-generic-function 'currentMA-val :lambda-list '(m))
(cl:defmethod currentMA-val ((m <tcu_board_data>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader tcu_board_msgs-msg:currentMA-val is deprecated.  Use tcu_board_msgs-msg:currentMA instead.")
  (currentMA m))

(cl:ensure-generic-function 'voltage-val :lambda-list '(m))
(cl:defmethod voltage-val ((m <tcu_board_data>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader tcu_board_msgs-msg:voltage-val is deprecated.  Use tcu_board_msgs-msg:voltage instead.")
  (voltage m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <tcu_board_data>) ostream)
  "Serializes a message object of type '<tcu_board_data>"
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'tempC))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'humidity))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'currentMA))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'voltage))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <tcu_board_data>) istream)
  "Deserializes a message object of type '<tcu_board_data>"
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'tempC) (roslisp-utils:decode-single-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'humidity) (roslisp-utils:decode-single-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'currentMA) (roslisp-utils:decode-single-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'voltage) (roslisp-utils:decode-single-float-bits bits)))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<tcu_board_data>)))
  "Returns string type for a message object of type '<tcu_board_data>"
  "tcu_board_msgs/tcu_board_data")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'tcu_board_data)))
  "Returns string type for a message object of type 'tcu_board_data"
  "tcu_board_msgs/tcu_board_data")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<tcu_board_data>)))
  "Returns md5sum for a message object of type '<tcu_board_data>"
  "bdb48909d88ffd8a6589dd5f63593bf1")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'tcu_board_data)))
  "Returns md5sum for a message object of type 'tcu_board_data"
  "bdb48909d88ffd8a6589dd5f63593bf1")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<tcu_board_data>)))
  "Returns full string definition for message of type '<tcu_board_data>"
  (cl:format cl:nil "float32 tempC~%float32 humidity~%float32 currentMA~%float32 voltage~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'tcu_board_data)))
  "Returns full string definition for message of type 'tcu_board_data"
  (cl:format cl:nil "float32 tempC~%float32 humidity~%float32 currentMA~%float32 voltage~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <tcu_board_data>))
  (cl:+ 0
     4
     4
     4
     4
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <tcu_board_data>))
  "Converts a ROS message object to a list"
  (cl:list 'tcu_board_data
    (cl:cons ':tempC (tempC msg))
    (cl:cons ':humidity (humidity msg))
    (cl:cons ':currentMA (currentMA msg))
    (cl:cons ':voltage (voltage msg))
))
