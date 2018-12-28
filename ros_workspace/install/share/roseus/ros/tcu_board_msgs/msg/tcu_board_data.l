;; Auto-generated. Do not edit!


(when (boundp 'tcu_board_msgs::tcu_board_data)
  (if (not (find-package "TCU_BOARD_MSGS"))
    (make-package "TCU_BOARD_MSGS"))
  (shadow 'tcu_board_data (find-package "TCU_BOARD_MSGS")))
(unless (find-package "TCU_BOARD_MSGS::TCU_BOARD_DATA")
  (make-package "TCU_BOARD_MSGS::TCU_BOARD_DATA"))

(in-package "ROS")
;;//! \htmlinclude tcu_board_data.msg.html


(defclass tcu_board_msgs::tcu_board_data
  :super ros::object
  :slots (_tempC _humidity _currentMA _voltage ))

(defmethod tcu_board_msgs::tcu_board_data
  (:init
   (&key
    ((:tempC __tempC) 0.0)
    ((:humidity __humidity) 0.0)
    ((:currentMA __currentMA) 0.0)
    ((:voltage __voltage) 0.0)
    )
   (send-super :init)
   (setq _tempC (float __tempC))
   (setq _humidity (float __humidity))
   (setq _currentMA (float __currentMA))
   (setq _voltage (float __voltage))
   self)
  (:tempC
   (&optional __tempC)
   (if __tempC (setq _tempC __tempC)) _tempC)
  (:humidity
   (&optional __humidity)
   (if __humidity (setq _humidity __humidity)) _humidity)
  (:currentMA
   (&optional __currentMA)
   (if __currentMA (setq _currentMA __currentMA)) _currentMA)
  (:voltage
   (&optional __voltage)
   (if __voltage (setq _voltage __voltage)) _voltage)
  (:serialization-length
   ()
   (+
    ;; float32 _tempC
    4
    ;; float32 _humidity
    4
    ;; float32 _currentMA
    4
    ;; float32 _voltage
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float32 _tempC
       (sys::poke _tempC (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _humidity
       (sys::poke _humidity (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _currentMA
       (sys::poke _currentMA (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _voltage
       (sys::poke _voltage (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float32 _tempC
     (setq _tempC (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _humidity
     (setq _humidity (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _currentMA
     (setq _currentMA (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _voltage
     (setq _voltage (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get tcu_board_msgs::tcu_board_data :md5sum-) "bdb48909d88ffd8a6589dd5f63593bf1")
(setf (get tcu_board_msgs::tcu_board_data :datatype-) "tcu_board_msgs/tcu_board_data")
(setf (get tcu_board_msgs::tcu_board_data :definition-)
      "float32 tempC
float32 humidity
float32 currentMA
float32 voltage

")



(provide :tcu_board_msgs/tcu_board_data "bdb48909d88ffd8a6589dd5f63593bf1")


