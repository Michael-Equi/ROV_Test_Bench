
(cl:in-package :asdf)

(defsystem "ms5837-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils :std_msgs-msg
)
  :components ((:file "_package")
    (:file "ms5837_data" :depends-on ("_package_ms5837_data"))
    (:file "_package_ms5837_data" :depends-on ("_package"))
  ))