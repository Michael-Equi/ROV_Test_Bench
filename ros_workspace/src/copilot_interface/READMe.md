# copilot_interface



## Build Intructions


## Running the Node


## Configuring the node with dynamic reconfigure


## Troubleshooting


## Node Information

Topics:

* `/raspicam_node/compressed`:
  Publishes `sensor_msgs/CompressedImage` with jpeg from the camera module.

* `/raspicam_node/camera_info`:
  Publishes `sensor_msgs/CameraInfo` camera info for each frame.

Services:

* `/set_camera_info`: Used to update calibration info for the camera.

Parameters:

* `camera_frame_id` (tf frame): The frame identifier to associate the camera.

* `camera_info_url`: The URL of the camera calibration `.yaml` file.

* `camera_name` (string): The name of the camera, should match with name in camera_info file.

* `framerate` (fps): Framerate to capture at. Maximum 90fps

* `height` (pixels): Height to capture images at.

* `width` (pixels): Width to capture images at.

* `quality` (0-100): Quality of the captured images.

