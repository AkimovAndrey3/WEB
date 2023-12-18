import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../models/user.model";
import {Record} from "../../system/shared_/models/record.model";

@Injectable()

export class UsersService {
    constructor(private http: HttpClient) {}
    getUsers(email: string): Observable<User> {
        return this.http.get(`http://localhost:3000/users?email=${email}`)
            .pipe(map((user: any) => user[0] ? user[0] : undefined));
    }
    deleteUser(id:number)
    {
        return this.http.delete(`http://localhost:3000/users/${id}`)
    }
    createUser(user: User){
        return this.http.post(`http://localhost:3000/users`, user)
    }
    updateUser(userId:number, data:any)
    {
      return this.http.put(`http://localhost:3000/users/${userId}`, data)
    }
}
