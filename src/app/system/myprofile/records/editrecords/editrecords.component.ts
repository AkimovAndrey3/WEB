import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgForm} from "@angular/forms";
import {Record} from "../../../shared_/models/record.model";
import {RecordService} from "../../../shared_/services/record.service";
import {Message} from "../../../../shared/models/message.model";
import {User} from "../../../../shared/models/user.model";
import {UsersService} from "../../../../shared/services/users.service";

@Component({
  selector: 'app-editrecords',
  templateUrl: './editrecords.component.html',
  styleUrl: './editrecords.component.css'
})
export class EditrecordsComponent implements OnInit {
  @Input() records:Record[]=[];
  @Output() onRecordEdit = new EventEmitter<Record>();
  currentRecordId = 1;
  currentRecord:Record|any;
  public message:Message|any;
  public user:User|any;
  isAdmin = false;
  constructor(private recordService:RecordService) {
  }
  ngOnInit() {
    this.message = new Message('success', '');
    this.user = JSON.parse(window.localStorage.getItem('user')!)
    if(this.user.id == 1)
      this.isAdmin = true;
    this.onRecordChange();
  }
  onSubmit(f: NgForm) {
    const {name, date, description} = f.value;
    const author = this.user.name;
    const record = new Record(name, date, description, author, +this.currentRecordId);
    this.recordService.updateRecord(record)
      .subscribe((data:Record|any)=>{
        this.onRecordEdit.emit(data);
        this.message.text = 'Пост успешно отредактирован';
        window.setTimeout(()=>this.message.text='',5000);
      })
  }
  onRecordChange()
  {
    this.currentRecord=this.records
      .find(c=> c.id === +this.currentRecordId)
  }
  onRecordDelete(){
    this.recordService.deleteRecord(this.currentRecordId);
    console.log("Push");
  }
  asd(){
    console.log("Push")
  }
}
