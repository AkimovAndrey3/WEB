import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SystemComponent} from "./system.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {MyprofileComponent} from "./myprofile/myprofile.component";

const routes:Routes = [
  {path:'system', component:SystemComponent, children:[
      {path:'home', component:HomeComponent},
      {path:'contact', component:ContactComponent},
          {path:'profile', component:MyprofileComponent}
    ]}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class SystemRoutingModule {}
