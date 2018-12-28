
(cl:in-package :asdf)

(defsystem "sht31-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils :std_msgs-msg
)
  :components ((:file "_package")
    (:file "sht31_data" :depends-on ("_package_sht31_data"))
    (:file "_package_sht31_data" :depends-on ("_package"))
  ))