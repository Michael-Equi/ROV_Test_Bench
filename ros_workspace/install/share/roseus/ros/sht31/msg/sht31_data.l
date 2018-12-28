;; Auto-generated. Do not edit!


(when (boundp 'sht31::sht31_data)
  (if (not (find-package "SHT31"))
    (make-package "SHT31"))
  (shadow 'sht31_data (find-package "SHT31")))
(unless (find-package "SHT31::SHT31_DATA")
  (make-package "SHT31::SHT31_DATA"))

(in-package "ROS")
;;//! \htmlinclude sht31_data.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass sht31::sht31_data
  :super ros::object
  :slots (_header _tempC _tempF _humidity ))

(defmethod sht31::sht31_data
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:tempC __tempC) 0.0)
    ((:tempF __tempF) 0.0)
    ((:humidity __humidity) 0.0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _tempC (float __tempC))
   (setq _tempF (float __tempF))
   (setq _humidity (float __humidity))
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
  (:humidity
   (&optional __humidity)
   (if __humidity (setq _humidity __humidity)) _humidity)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; float64 _tempC
    8
    ;; float64 _tempF
    8
    ;; float64 _humidity
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
     ;; float64 _humidity
       (sys::poke _humidity (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
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
   ;; float64 _humidity
     (setq _humidity (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get sht31::sht31_data :md5sum-) "e4499b266523b5e72cb5c84b02109a13")
(setf (get sht31::sht31_data :datatype-) "sht31/sht31_data")
(setf (get sht31::sht31_data :definition-)
      "Header header

float64 tempC
float64 tempF
float64 humidity

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



(provide :sht31/sht31_data "e4499b266523b5e72cb5c84b02109a13")


