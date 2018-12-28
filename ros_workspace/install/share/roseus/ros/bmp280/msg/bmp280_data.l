;; Auto-generated. Do not edit!


(when (boundp 'bmp280::bmp280_data)
  (if (not (find-package "BMP280"))
    (make-package "BMP280"))
  (shadow 'bmp280_data (find-package "BMP280")))
(unless (find-package "BMP280::BMP280_DATA")
  (make-package "BMP280::BMP280_DATA"))

(in-package "ROS")
;;//! \htmlinclude bmp280_data.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass bmp280::bmp280_data
  :super ros::object
  :slots (_header _tempC _pressureP _pressureA _altitudeM ))

(defmethod bmp280::bmp280_data
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:tempC __tempC) 0.0)
    ((:pressureP __pressureP) 0.0)
    ((:pressureA __pressureA) 0.0)
    ((:altitudeM __altitudeM) 0.0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _tempC (float __tempC))
   (setq _pressureP (float __pressureP))
   (setq _pressureA (float __pressureA))
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
  (:pressureP
   (&optional __pressureP)
   (if __pressureP (setq _pressureP __pressureP)) _pressureP)
  (:pressureA
   (&optional __pressureA)
   (if __pressureA (setq _pressureA __pressureA)) _pressureA)
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
    ;; float64 _pressureP
    8
    ;; float64 _pressureA
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
     ;; float64 _pressureP
       (sys::poke _pressureP (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _pressureA
       (sys::poke _pressureA (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
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
   ;; float64 _pressureP
     (setq _pressureP (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _pressureA
     (setq _pressureA (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _altitudeM
     (setq _altitudeM (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get bmp280::bmp280_data :md5sum-) "c5e4218ec509085711881fab8b571873")
(setf (get bmp280::bmp280_data :datatype-) "bmp280/bmp280_data")
(setf (get bmp280::bmp280_data :definition-)
      "Header header

float64 tempC
float64 pressureP
float64 pressureA
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



(provide :bmp280/bmp280_data "c5e4218ec509085711881fab8b571873")


