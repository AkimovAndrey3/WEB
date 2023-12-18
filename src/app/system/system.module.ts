import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {SystemComponent} from './system.component';
import {HeaderComponent} from "../shared/component/header/header.component";
import {FooterComponent} from "../shared/component/footer/footer.component";
import {RouterOutlet} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {SystemRoutingModule} from "./system-routing.module";
import {MyprofileComponent} from "./myprofile/myprofile.component";
import {RecordsComponent} from "./myprofile/records/records.component";
import {AddrecordsComponent} from "./myprofile/records/addrecords/addrecords.component";
import {EditrecordsComponent} from "./myprofile/records/editrecords/editrecords.component";
import {NgOptimizedImage} from "@angular/common";
import {RecordService} from "./shared_/services/record.service";
import {SerchPipe} from "./shared_/pipes/search.pipe";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {FormsModule} from "@angular/forms";
import {AddusersComponent} from "./myprofile/records/addusers/addusers.component";
import {EditusersComponent} from "./myprofile/records/editusers/editusers.component";

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    MyprofileComponent,
    RecordsComponent,
    AddrecordsComponent,
    EditrecordsComponent,
    SystemComponent,
    SerchPipe,
    AddusersComponent,
    EditusersComponent
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    SharedModule,
    SystemRoutingModule,
    NgOptimizedImage,
    MatButtonModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [RecordService],
})

export class SystemModule { }
