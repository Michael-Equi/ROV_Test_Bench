
(cl:in-package :asdf)

(defsystem "rov_control_interface-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils )
  :components ((:file "_package")
    (:file "rov_sensitivity" :depends-on ("_package_rov_sensitivity"))
    (:file "_package_rov_sensitivity" :depends-on ("_package"))
  ))