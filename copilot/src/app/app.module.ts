import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';

import { ChartModule } from 'angular2-chartjs';

import { CopilotModule } from './copilot/copilot.module';
import { DrqModule } from './drq/drq.module';
import { SensortelemetryModule } from './sensortelemetry/sensortelemetry.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    ChartModule,
    MaterialModule,
    CopilotModule,
    DrqModule,
    SensortelemetryModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  exports: [
    MaterialModule,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
