import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MultByPipe} from './Pipes/mult-by.pipe';
import { ExMarksPipe } from './Pipes/ex-marks.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
    ExMarksPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
