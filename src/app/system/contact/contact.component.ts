import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Record} from "../shared_/models/record.model";
import {RecordService} from "../shared_/services/record.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  records: Record[]=[];
  isLoaded=false;
  searchValue='';
  searchPlaceholder='Название';
  searchField='name';
  private fields ='';
  constructor(private recordService: RecordService) {}
  ngOnInit() {
    this.recordService.getRecords()
      .subscribe((records:Record[]|any)=>{
        this.records=records;
        this.isLoaded=true;
      });
  }

  changeCriteria(name: string) {
    this.searchField = name;
    if (name == 'name')
      this.searchPlaceholder = "Название";
    if (name == 'date')
        this.searchPlaceholder = "Дата";
    if (name == 'id')
        this.searchPlaceholder = "Номер";
  }
}
