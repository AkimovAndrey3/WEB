import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth-routing.module";

import { LogComponent } from './log/log.component';
import {AuthComponent} from "./auth.component";
import { RegComponent } from './reg/reg.component';
import {SharedModule} from "../shared/shared.module";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations:[
    LogComponent,
    AuthComponent,
    RegComponent
  ],
  imports:[
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    RouterLink
  ]
})
export class AuthModule {}

