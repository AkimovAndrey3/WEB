import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AuthModule} from "./auth/auth.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "./shared/services/users.service";
import {AuthService} from "./shared/services/auth.service";
import {AuthRoutingModule} from "./auth/auth-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SystemModule} from "./system/system.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SystemModule,
    HttpClientModule,
    AppRoutingModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
