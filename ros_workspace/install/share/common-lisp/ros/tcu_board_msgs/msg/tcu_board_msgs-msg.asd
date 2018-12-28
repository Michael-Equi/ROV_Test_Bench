
(cl:in-package :asdf)

(defsystem "tcu_board_msgs-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils )
  :components ((:file "_package")
    (:file "tcu_board_data" :depends-on ("_package_tcu_board_data"))
    (:file "_package_tcu_board_data" :depends-on ("_package"))
  ))