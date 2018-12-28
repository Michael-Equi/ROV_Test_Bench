
"use strict";

let InitWaypointsFromFile = require('./InitWaypointsFromFile.js')
let SetMBSMControllerParams = require('./SetMBSMControllerParams.js')
let InitWaypointSet = require('./InitWaypointSet.js')
let SwitchToManual = require('./SwitchToManual.js')
let Hold = require('./Hold.js')
let GetSMControllerParams = require('./GetSMControllerParams.js')
let InitHelicalTrajectory = require('./InitHelicalTrajectory.js')
let SetSMControllerParams = require('./SetSMControllerParams.js')
let InitRectTrajectory = require('./InitRectTrajectory.js')
let InitCircularTrajectory = require('./InitCircularTrajectory.js')
let ResetController = require('./ResetController.js')
let GetMBSMControllerParams = require('./GetMBSMControllerParams.js')
let AddWaypoint = require('./AddWaypoint.js')
let SetPIDParams = require('./SetPIDParams.js')
let GetPIDParams = require('./GetPIDParams.js')
let GoTo = require('./GoTo.js')
let IsRunningTrajectory = require('./IsRunningTrajectory.js')
let ClearWaypoints = require('./ClearWaypoints.js')
let SwitchToAutomatic = require('./SwitchToAutomatic.js')
let StartTrajectory = require('./StartTrajectory.js')
let GoToIncremental = require('./GoToIncremental.js')
let GetWaypoints = require('./GetWaypoints.js')

module.exports = {
  InitWaypointsFromFile: InitWaypointsFromFile,
  SetMBSMControllerParams: SetMBSMControllerParams,
  InitWaypointSet: InitWaypointSet,
  SwitchToManual: SwitchToManual,
  Hold: Hold,
  GetSMControllerParams: GetSMControllerParams,
  InitHelicalTrajectory: InitHelicalTrajectory,
  SetSMControllerParams: SetSMControllerParams,
  InitRectTrajectory: InitRectTrajectory,
  InitCircularTrajectory: InitCircularTrajectory,
  ResetController: ResetController,
  GetMBSMControllerParams: GetMBSMControllerParams,
  AddWaypoint: AddWaypoint,
  SetPIDParams: SetPIDParams,
  GetPIDParams: GetPIDParams,
  GoTo: GoTo,
  IsRunningTrajectory: IsRunningTrajectory,
  ClearWaypoints: ClearWaypoints,
  SwitchToAutomatic: SwitchToAutomatic,
  StartTrajectory: StartTrajectory,
  GoToIncremental: GoToIncremental,
  GetWaypoints: GetWaypoints,
};
