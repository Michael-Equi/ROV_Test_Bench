
(cl:in-package :asdf)

(defsystem "vector_drive-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils )
  :components ((:file "_package")
    (:file "thrusterPercents" :depends-on ("_package_thrusterPercents"))
    (:file "_package_thrusterPercents" :depends-on ("_package"))
  ))