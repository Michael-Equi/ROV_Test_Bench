;; Auto-generated. Do not edit!


(when (boundp 'rov_control_interface::rov_sensitivity)
  (if (not (find-package "ROV_CONTROL_INTERFACE"))
    (make-package "ROV_CONTROL_INTERFACE"))
  (shadow 'rov_sensitivity (find-package "ROV_CONTROL_INTERFACE")))
(unless (find-package "ROV_CONTROL_INTERFACE::ROV_SENSITIVITY")
  (make-package "ROV_CONTROL_INTERFACE::ROV_SENSITIVITY"))

(in-package "ROS")
;;//! \htmlinclude rov_sensitivity.msg.html


(defclass rov_control_interface::rov_sensitivity
  :super ros::object
  :slots (_l_scale _a_scale _v_scale ))

(defmethod rov_control_interface::rov_sensitivity
  (:init
   (&key
    ((:l_scale __l_scale) 0.0)
    ((:a_scale __a_scale) 0.0)
    ((:v_scale __v_scale) 0.0)
    )
   (send-super :init)
   (setq _l_scale (float __l_scale))
   (setq _a_scale (float __a_scale))
   (setq _v_scale (float __v_scale))
   self)
  (:l_scale
   (&optional __l_scale)
   (if __l_scale (setq _l_scale __l_scale)) _l_scale)
  (:a_scale
   (&optional __a_scale)
   (if __a_scale (setq _a_scale __a_scale)) _a_scale)
  (:v_scale
   (&optional __v_scale)
   (if __v_scale (setq _v_scale __v_scale)) _v_scale)
  (:serialization-length
   ()
   (+
    ;; float64 _l_scale
    8
    ;; float64 _a_scale
    8
    ;; float64 _v_scale
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float64 _l_scale
       (sys::poke _l_scale (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _a_scale
       (sys::poke _a_scale (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _v_scale
       (sys::poke _v_scale (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float64 _l_scale
     (setq _l_scale (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _a_scale
     (setq _a_scale (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _v_scale
     (setq _v_scale (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get rov_control_interface::rov_sensitivity :md5sum-) "00b658ca86463c93197e8e9aac68e5df")
(setf (get rov_control_interface::rov_sensitivity :datatype-) "rov_control_interface/rov_sensitivity")
(setf (get rov_control_interface::rov_sensitivity :definition-)
      "
float64 l_scale
float64 a_scale
float64 v_scale

")



(provide :rov_control_interface/rov_sensitivity "00b658ca86463c93197e8e9aac68e5df")


