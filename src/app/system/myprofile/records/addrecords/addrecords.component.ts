import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {RecordService} from "../../../shared_/services/record.service";
import {Record} from "../../../shared_/models/record.model";
import {Message} from "../../../../shared/models/message.model";
import {User} from "../../../../shared/models/user.model";

@Component({
  selector: 'app-addrecords',
  templateUrl: './addrecords.component.html',
  styleUrl: './addrecords.component.css'
})
export class AddrecordsComponent implements OnInit{
  @Output() onRecordAdd = new EventEmitter<Record>();
  constructor(private recordService: RecordService) {
  }
  public message:Message|any;
  public user:User|any;
  ngOnInit() {
    this.message = new Message('success', '');
    this.user = JSON.parse(window.localStorage.getItem('user')!)
  }
  onSubmit(f: NgForm) {
    const {name, date, description} = f.value;
    const author = this.user.name;
    const record = new Record(name, date, description, author);

    this.recordService.createRecord(record)
      .subscribe(()=>{
        this.showMessage({
          text:'Новый пост успешно создан',
          type:'succes'
        });
        f.reset();
        this.onRecordAdd.emit(record);
      });
  }
  private showMessage(message:Message)
  {
    this.message=message;
    window.setTimeout(()=>{
      this.message.text='';
    },5000);
  }
}
