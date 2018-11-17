import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule, MatCardModule, MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule } from '@angular/forms';
import 'hammerjs';

import { AppComponent } from './app.component';
import { SlidersComponent } from './sliders/sliders.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidersComponent,
    ButtonsComponent,
    ConfirmdialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    Ng5SliderModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmdialogComponent ]
})
export class AppModule { }
