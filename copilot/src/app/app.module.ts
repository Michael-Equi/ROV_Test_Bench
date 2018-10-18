import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSliderModule
} from '@angular/material';
import { ChartModule } from 'angular2-chartjs';
import { DashboardComponent } from './Example Pages/dashboard/dashboard.component';
import { TableComponent } from './Example Pages/table/table.component';

import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './Example Pages/first-page/first-page.component';
import { SecondPageComponent } from './Example Pages/second-page/second-page.component';
import { ThirdPageComponent } from './Example Pages/third-page/third-page.component';
import { CopilotComponent } from './copilot/copilot.component';
import { MainCameraModuleComponent } from './CopilotModules/main-camera-module/main-camera-module.component';
import { SecondaryCameraModuleComponent } from './CopilotModules/secondary-camera-module/secondary-camera-module.component';
import { TimerModuleComponent } from './CopilotModules/timer-module/timer-module.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { ThrusterSensativityComponent } from './CopilotModules/thruster-sensativity/thruster-sensativity.component';
import { DepthChartComponent } from './CopilotModules/depth-chart/depth-chart.component';
import { VelocityGraphComponent } from './CopilotModules/velocity-graph/velocity-graph.component';
import { ToolsComponent } from './CopilotModules/tools/tools.component';
import { ThrustersComponent } from './CopilotModules/thrusters/thrusters.component';
import { SystemsComponent } from './CopilotModules/systems/systems.component';
import { TelemetrydataComponent } from './CopilotModules/telemetrydata/telemetrydata.component';
import { DrqComponent } from './drq/drq.component';
import { Drq1Component } from './DRQModules/drq1/drq1.component';
import { Drq2Component } from './DRQModules/drq2/drq2.component';
import { DrqsettingsComponent } from './DRQModules/drqsettings/drqsettings.component';
import { Drq1dataComponent } from './DRQModules/drq1data/drq1data.component';
import { Drq2dataComponent } from './DRQModules/drq2data/drq2data.component';
import { Statusdrq1Component } from './DRQModules/statusdrq1/statusdrq1.component';
import { Statusdrq2Component } from './DRQModules/statusdrq2/statusdrq2.component';
import { Settingsdrq1Component } from './DRQModules/settingsdrq1/settingsdrq1.component';
import { Settingsdrq2Component } from './DRQModules/settingsdrq2/settingsdrq2.component';
import { SensortelemetryComponent } from './sensortelemetry/sensortelemetry.component';
import { TubedataComponent } from './SensorTelemetryModules/tubedata/tubedata.component';
import { TcudataComponent } from './SensorTelemetryModules/tcudata/tcudata.component';

const appRoutes: Routes = [
  { path: 'drq', component: DrqComponent },
  { path: 'sensortelemetry', component: SensortelemetryComponent },
  { path: 'third-page', component: ThirdPageComponent },
  { path: 'copilot', component: CopilotComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    TableComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    CopilotComponent,
    MainCameraModuleComponent,
    SecondaryCameraModuleComponent,
    TimerModuleComponent,
    CardHeaderComponent,
    ThrusterSensativityComponent,
    DepthChartComponent,
    VelocityGraphComponent,
    ToolsComponent,
    ThrustersComponent,
    SystemsComponent,
    TelemetrydataComponent,
    DrqComponent,
    Drq1Component,
    Drq2Component,
    DrqsettingsComponent,
    Drq1dataComponent,
    Drq2dataComponent,
    Statusdrq1Component,
    Statusdrq2Component,
    Settingsdrq1Component,
    Settingsdrq2Component,
    SensortelemetryComponent,
    TubedataComponent,
    TcudataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSliderModule,
    ChartModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
