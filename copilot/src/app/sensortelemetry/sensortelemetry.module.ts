import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

import { SensortelemetryComponent } from './sensortelemetry.component';
import { TubedataComponent } from './sensor-telemetry-modules/tubedata/tubedata.component';
import { TcudataComponent } from './sensor-telemetry-modules/tcudata/tcudata.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    SensortelemetryComponent,
    TubedataComponent,
    TcudataComponent
  ],
  exports: [
    SensortelemetryComponent,
    TubedataComponent,
    TcudataComponent
  ]
})
export class SensortelemetryModule { }
