; Auto-generated. Do not edit!


(cl:in-package rov_control_interface-msg)


;//! \htmlinclude rov_sensitivity.msg.html

(cl:defclass <rov_sensitivity> (roslisp-msg-protocol:ros-message)
  ((l_scale
    :reader l_scale
    :initarg :l_scale
    :type cl:float
    :initform 0.0)
   (a_scale
    :reader a_scale
    :initarg :a_scale
    :type cl:float
    :initform 0.0)
   (v_scale
    :reader v_scale
    :initarg :v_scale
    :type cl:float
    :initform 0.0))
)

(cl:defclass rov_sensitivity (<rov_sensitivity>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <rov_sensitivity>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'rov_sensitivity)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name rov_control_interface-msg:<rov_sensitivity> is deprecated: use rov_control_interface-msg:rov_sensitivity instead.")))

(cl:ensure-generic-function 'l_scale-val :lambda-list '(m))
(cl:defmethod l_scale-val ((m <rov_sensitivity>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rov_control_interface-msg:l_scale-val is deprecated.  Use rov_control_interface-msg:l_scale instead.")
  (l_scale m))

(cl:ensure-generic-function 'a_scale-val :lambda-list '(m))
(cl:defmethod a_scale-val ((m <rov_sensitivity>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rov_control_interface-msg:a_scale-val is deprecated.  Use rov_control_interface-msg:a_scale instead.")
  (a_scale m))

(cl:ensure-generic-function 'v_scale-val :lambda-list '(m))
(cl:defmethod v_scale-val ((m <rov_sensitivity>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rov_control_interface-msg:v_scale-val is deprecated.  Use rov_control_interface-msg:v_scale instead.")
  (v_scale m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <rov_sensitivity>) ostream)
  "Serializes a message object of type '<rov_sensitivity>"
  (cl:let ((bits (roslisp-utils:encode-double-float-bits (cl:slot-value msg 'l_scale))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 32) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 40) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 48) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 56) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-double-float-bits (cl:slot-value msg 'a_scale))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 32) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 40) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 48) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 56) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-double-float-bits (cl:slot-value msg 'v_scale))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 32) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 40) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 48) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 56) bits) ostream))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <rov_sensitivity>) istream)
  "Deserializes a message object of type '<rov_sensitivity>"
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 32) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 40) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 48) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 56) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'l_scale) (roslisp-utils:decode-double-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 32) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 40) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 48) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 56) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'a_scale) (roslisp-utils:decode-double-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 32) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 40) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 48) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 56) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'v_scale) (roslisp-utils:decode-double-float-bits bits)))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<rov_sensitivity>)))
  "Returns string type for a message object of type '<rov_sensitivity>"
  "rov_control_interface/rov_sensitivity")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'rov_sensitivity)))
  "Returns string type for a message object of type 'rov_sensitivity"
  "rov_control_interface/rov_sensitivity")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<rov_sensitivity>)))
  "Returns md5sum for a message object of type '<rov_sensitivity>"
  "00b658ca86463c93197e8e9aac68e5df")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'rov_sensitivity)))
  "Returns md5sum for a message object of type 'rov_sensitivity"
  "00b658ca86463c93197e8e9aac68e5df")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<rov_sensitivity>)))
  "Returns full string definition for message of type '<rov_sensitivity>"
  (cl:format cl:nil "~%float64 l_scale~%float64 a_scale~%float64 v_scale~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'rov_sensitivity)))
  "Returns full string definition for message of type 'rov_sensitivity"
  (cl:format cl:nil "~%float64 l_scale~%float64 a_scale~%float64 v_scale~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <rov_sensitivity>))
  (cl:+ 0
     8
     8
     8
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <rov_sensitivity>))
  "Converts a ROS message object to a list"
  (cl:list 'rov_sensitivity
    (cl:cons ':l_scale (l_scale msg))
    (cl:cons ':a_scale (a_scale msg))
    (cl:cons ':v_scale (v_scale msg))
))
