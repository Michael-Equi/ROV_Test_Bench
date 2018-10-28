#! /bin/zsh

function clion(){
   path=$(find / -name "clion.sh")
   ROSWorkspace=$(find /home -type d -name "ros_workspace")
   continue="f"
   while [ $continue != "t" ];
   do
      if [ ! -z $(sudo find "${ROSWorkspace}" -name "devel")  ]; then
         source "${ROSWorkspace}/devel/setup.zsh"
         echo "${ROSWorkspace}/devel/setup.zsh successfully sourced! "
         continue="t"
      else
         read -p "Source of ${ROSWorkspace}/devel/setup.zsh failed do you wish to continue (t/f)? " continue
         if [ $continue != "t" ]; then
            read -p "Enter the ROS package you would like to source: " ROSWorkspace
         fi
      fi

    done

    sudo "${path}"
}

function webstorm(){
   path=$(find / -name "webstorm.sh")
   ROSWorkspace=$(find /home -type d -name "ros_workspace")
   continue="f"
   while [ $continue != "t" ];
   do
      if [ ! -z $(sudo find "${ROSWorkspace}" -name "devel")  ]; then
         source "${ROSWorkspace}/devel/setup.zsh"
         echo "${ROSWorkspace}/devel/setup.zsh successfully sourced! "
         continue="t"
      else
         read -p "Source of ${ROSWorkspace}/devel/setup.zsh failed do you wish to continue (t/f)? " continue
         if [ $continue != "t" ]; then
            read -p "Enter the ROS package you would like to source: " ROSWorkspace
         fi
      fi

    done

    sudo "${path}"
}

function pycharm(){
   path=$(find / -name "pycharm.sh")
   ROSWorkspace=$(find /home -type d -name "ros_workspace")
   continue="f"
   while [ $continue != "t" ];
   do
      if [ ! -z $(sudo find "${ROSWorkspace}" -name "devel")  ]; then
         source "${ROSWorkspace}/devel/setup.zsh"
         echo "${ROSWorkspace}/devel/setup.zsh successfully sourced! "
         continue="t"
      else
         read -p "Source of ${ROSWorkspace}/devel/setup.zsh failed do you wish to continue (t/f)? " continue
         if [ $continue != "t" ]; then
            read -p "Enter the ROS package you would like to source: " ROSWorkspace
         fi
      fi

    done

    sudo "${path}"
}

function arduino(){
   path=$(find / -type f -name arduino)
   
   sudo "${path}"
}

