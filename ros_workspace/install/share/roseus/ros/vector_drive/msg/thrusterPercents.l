;; Auto-generated. Do not edit!


(when (boundp 'vector_drive::thrusterPercents)
  (if (not (find-package "VECTOR_DRIVE"))
    (make-package "VECTOR_DRIVE"))
  (shadow 'thrusterPercents (find-package "VECTOR_DRIVE")))
(unless (find-package "VECTOR_DRIVE::THRUSTERPERCENTS")
  (make-package "VECTOR_DRIVE::THRUSTERPERCENTS"))

(in-package "ROS")
;;//! \htmlinclude thrusterPercents.msg.html


(defclass vector_drive::thrusterPercents
  :super ros::object
  :slots (_t1 _t2 _t3 _t4 ))

(defmethod vector_drive::thrusterPercents
  (:init
   (&key
    ((:t1 __t1) 0)
    ((:t2 __t2) 0)
    ((:t3 __t3) 0)
    ((:t4 __t4) 0)
    )
   (send-super :init)
   (setq _t1 (round __t1))
   (setq _t2 (round __t2))
   (setq _t3 (round __t3))
   (setq _t4 (round __t4))
   self)
  (:t1
   (&optional __t1)
   (if __t1 (setq _t1 __t1)) _t1)
  (:t2
   (&optional __t2)
   (if __t2 (setq _t2 __t2)) _t2)
  (:t3
   (&optional __t3)
   (if __t3 (setq _t3 __t3)) _t3)
  (:t4
   (&optional __t4)
   (if __t4 (setq _t4 __t4)) _t4)
  (:serialization-length
   ()
   (+
    ;; int32 _t1
    4
    ;; int32 _t2
    4
    ;; int32 _t3
    4
    ;; int32 _t4
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; int32 _t1
       (write-long _t1 s)
     ;; int32 _t2
       (write-long _t2 s)
     ;; int32 _t3
       (write-long _t3 s)
     ;; int32 _t4
       (write-long _t4 s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; int32 _t1
     (setq _t1 (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; int32 _t2
     (setq _t2 (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; int32 _t3
     (setq _t3 (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; int32 _t4
     (setq _t4 (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get vector_drive::thrusterPercents :md5sum-) "a7d0e7700b4cbc9f7f9261f014f60680")
(setf (get vector_drive::thrusterPercents :datatype-) "vector_drive/thrusterPercents")
(setf (get vector_drive::thrusterPercents :definition-)
      "int32 t1
int32 t2
int32 t3
int32 t4

")



(provide :vector_drive/thrusterPercents "a7d0e7700b4cbc9f7f9261f014f60680")


