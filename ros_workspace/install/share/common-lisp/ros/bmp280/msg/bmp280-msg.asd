
(cl:in-package :asdf)

(defsystem "bmp280-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils :std_msgs-msg
)
  :components ((:file "_package")
    (:file "bmp280_data" :depends-on ("_package_bmp280_data"))
    (:file "_package_bmp280_data" :depends-on ("_package"))
  ))