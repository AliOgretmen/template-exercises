import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReferansComponent } from './components/referans/referans.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { OdevComponent } from './components/odev/odev.component';


@NgModule({
  declarations: [
    AppComponent,
    ReferansComponent,
    PipesComponent,
    ParentComponent,
    ChildComponent,
    OdevComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
