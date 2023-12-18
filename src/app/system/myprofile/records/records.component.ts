import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecordService} from "../../shared_/services/record.service";
import {Record} from "../../shared_/models/record.model";
import {User} from "../../../shared/models/user.model";

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrl: './records.component.css'
})
export class RecordsComponent implements OnInit{
  isAddRecords = true;
  isEditRecords = false;
  userIsAdmin = false;
  isUser = false;
  isRecords = true;
  isAddUser = true;
  isEditUser = false;
  constructor(private recordService:RecordService) {
  }
  records:Record[]=[];
  user:User|any;
  isLoaded=false;
  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user')!);
    this.isAdmin();
    this.recordService.getRecords()
      .subscribe((records:Record[]|any)=>{
        this.records=records;
        this.isLoaded=true;
      });
  }
  newRecordAdded(record:Record)
  {
    this.records.push(record);
  }
  recordWasEdited(record:Record)
  {
    const index=this.records
      .findIndex(c=>c.id === record.id);
    this.records[index] = record;
  }
  clickAddRecords(){
    this.isAddRecords = true;
    this.isEditRecords = false;
  }
  clickEditRecords(){
    this.isAddRecords = false;
    this.isEditRecords = true;
  }
  isAdmin(){
    if(this.user.id == 1)
      this.userIsAdmin = true;
  }
  clickUser(){
    this.isUser = true;
    this.isRecords = false;
  }
  clickRecords(){
    this.isUser = false;
    this.isRecords = true;
  }
  clickAddUser(){
    this.isAddUser = true;
    this.isEditUser = false;
  }
  clickEditUser(){
    this.isAddUser = false;
    this.isEditUser = true;
  }
}
