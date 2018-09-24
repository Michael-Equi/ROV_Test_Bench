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
import { DashboardComponent } from './Example Pages/dashboard/dashboard.component';
import { TableComponent } from './Example Pages/table/table.component';

import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './Example Pages/first-page/first-page.component';
import { SecondPageComponent } from './Example Pages/second-page/second-page.component';
import { ThirdPageComponent } from './Example Pages/third-page/third-page.component';
import { CopilotComponent } from './copilot/copilot.component';
import { MainCameraModuleComponent } from './Modules/main-camera-module/main-camera-module.component';
import { SecondaryCameraModuleComponent } from './Modules/secondary-camera-module/secondary-camera-module.component';
import { TimerModuleComponent } from './Modules/timer-module/timer-module.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { ThrusterSensativityComponent } from './Modules/thruster-sensativity/thruster-sensativity.component';

const appRoutes: Routes = [
  { path: 'first-page', component: FirstPageComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'third-page', component: ThirdPageComponent },
  { path: 'copilot', component: CopilotComponent}
]

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
