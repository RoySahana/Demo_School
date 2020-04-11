import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ClassComponent } from './class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
