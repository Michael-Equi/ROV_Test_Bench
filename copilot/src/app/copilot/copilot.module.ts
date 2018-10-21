import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { ChartModule } from 'angular2-chartjs';

import { CopilotComponent } from './copilot.component';
import { MainCameraModuleComponent } from './copilot-components/main-camera-module/main-camera-module.component';
import { SecondaryCameraModuleComponent } from './copilot-components/secondary-camera-module/secondary-camera-module.component';
import { TimerModuleComponent } from './copilot-components/timer-module/timer-module.component';
import { ThrusterSensativityComponent } from './copilot-components/thruster-sensativity/thruster-sensativity.component';
import { DepthChartComponent } from './copilot-components/depth-chart/depth-chart.component';
import { VelocityGraphComponent } from './copilot-components/velocity-graph/velocity-graph.component';
import { ToolsComponent } from './copilot-components/tools/tools.component';
import { ThrustersComponent } from './copilot-components/thrusters/thrusters.component';
import { SystemsComponent } from './copilot-components/systems/systems.component';
import { TelemetrydataComponent } from './copilot-components/telemetrydata/telemetrydata.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ChartModule
  ],
  declarations: [
    CopilotComponent,
    MainCameraModuleComponent,
    SecondaryCameraModuleComponent,
    TimerModuleComponent,
    ThrusterSensativityComponent,
    DepthChartComponent,
    VelocityGraphComponent,
    ToolsComponent,
    ThrustersComponent,
    SystemsComponent,
    TelemetrydataComponent,
  ],
  exports: [
    MainCameraModuleComponent,
    SecondaryCameraModuleComponent,
    TimerModuleComponent,
    ThrusterSensativityComponent,
    DepthChartComponent,
    VelocityGraphComponent,
    ToolsComponent,
    ThrustersComponent,
    SystemsComponent,
    TelemetrydataComponent
  ]
})
export class CopilotModule { }
