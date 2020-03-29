import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import {WarningAlertComponent} from './warning-alert/warning-alert.component';
import {ServerComponent} from './server/server.component'; // pointing to .ts file

//import morgan component
import {MorganComponent} from './morgan/morgan.component';
import { LilianOsuriComponent } from './lilian-osuri/lilian-osuri.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    MorganComponent,
    LilianOsuriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
