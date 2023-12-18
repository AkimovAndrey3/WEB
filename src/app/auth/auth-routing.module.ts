import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogComponent} from "./log/log.component";
import {RegComponent} from "./reg/reg.component";
import {AuthComponent} from "./auth.component";

const routes: Routes = [
  {path:'', component:AuthComponent, children: [
      {path:'login', component:LogComponent},
      {path:'reg', component:RegComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
