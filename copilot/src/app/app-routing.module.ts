import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CopilotComponent} from './copilot/copilot.component';
import {DrqComponent} from './drq/drq.component';
import {SensortelemetryComponent} from './sensortelemetry/sensortelemetry.component';

const appRoutes: Routes = [
  { path: 'drq', component: DrqComponent },
  { path: 'sensortelemetry', component: SensortelemetryComponent },
  { path: 'copilot', component: CopilotComponent},
  { path: '*', component: CopilotComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
