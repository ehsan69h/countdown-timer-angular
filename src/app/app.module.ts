import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SVGCircleComponent } from './svgcircle/svgcircle.component';

@NgModule({
  declarations: [
    AppComponent,
    SVGCircleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
