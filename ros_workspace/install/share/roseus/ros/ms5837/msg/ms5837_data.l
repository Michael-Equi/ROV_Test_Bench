;; Auto-generated. Do not edit!


(when (boundp 'ms5837::ms5837_data)
  (if (not (find-package "MS5837"))
    (make-package "MS5837"))
  (shadow 'ms5837_data (find-package "MS5837")))
(unless (find-package "MS5837::MS5837_DATA")
  (make-package "MS5837::MS5837_DATA"))

(in-package "ROS")
;;//! \htmlinclude ms5837_data.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass ms5837::ms5837_data
  :super ros::object
  :slots (_header _tempC _tempF _depth _altitudeM ))

(defmethod ms5837::ms5837_data
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:tempC __tempC) 0.0)
    ((:tempF __tempF) 0.0)
    ((:depth __depth) 0.0)
    ((:altitudeM __altitudeM) 0.0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _tempC (float __tempC))
   (setq _tempF (float __tempF))
   (setq _depth (float __depth))
   (setq _altitudeM (float __altitudeM))
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:tempC
   (&optional __tempC)
   (if __tempC (setq _tempC __tempC)) _tempC)
  (:tempF
   (&optional __tempF)
   (if __tempF (setq _tempF __tempF)) _tempF)
  (:depth
   (&optional __depth)
   (if __depth (setq _depth __depth)) _depth)
  (:altitudeM
   (&optional __altitudeM)
   (if __altitudeM (setq _altitudeM __altitudeM)) _altitudeM)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; float64 _tempC
    8
    ;; float64 _tempF
    8
    ;; float64 _depth
    8
    ;; float64 _altitudeM
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; float64 _tempC
       (sys::poke _tempC (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _tempF
       (sys::poke _tempF (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _depth
       (sys::poke _depth (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _altitudeM
       (sys::poke _altitudeM (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; float64 _tempC
     (setq _tempC (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _tempF
     (setq _tempF (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _depth
     (setq _depth (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _altitudeM
     (setq _altitudeM (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get ms5837::ms5837_data :md5sum-) "eca2bdcabad4ac8096363838d8496716")
(setf (get ms5837::ms5837_data :datatype-) "ms5837/ms5837_data")
(setf (get ms5837::ms5837_data :definition-)
      "Header header

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

")



(provide :ms5837/ms5837_data "eca2bdcabad4ac8096363838d8496716")


