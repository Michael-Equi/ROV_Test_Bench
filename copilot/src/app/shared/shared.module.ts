import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { CardHeaderComponent} from './card-header/card-header.component';
import { NavComponent  } from './nav/nav.component';
import {MaterialModule} from '../material.module';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    CardHeaderComponent,
    NavComponent
  ],
  exports: [
    CardHeaderComponent,
    NavComponent
  ]
})
export class SharedModule { }
