import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Record} from '../models/record.model';
import {Observable} from "rxjs";

@Injectable()
export class RecordService {

  constructor(private http: HttpClient) {
  }
  createRecord(record: Record) {
    return this.http.post('http://localhost:3000/record', record);
  }
  getRecords(){
    return this.http.get('http://localhost:3000/record');
  }
  updateRecord(data:Record)
  {
    return this.http.put(`http://localhost:3000/record/${data.id}`, data)
  }
  deleteRecord(id:number)
  {
    return this.http.delete(`http://localhost:3000/record/${id}`)
  }
}
