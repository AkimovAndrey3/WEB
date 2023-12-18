import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {User} from "../../shared/models/user.model";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {UsersService} from "../../shared/services/users.service";

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent implements OnInit {
  imagePath:string;
  user:User|any;
  constructor(private authService: AuthService,
              private router: Router,
              private userService:UsersService) {
    this.imagePath = 'assets/images/profile.jpg';
  }
  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user')!)
  }
  onSubmit()
  {
    this.userService.deleteUser(this.user.id)
        .subscribe((user:User|any)=>{
          window.localStorage.clear();
          this.router.navigate(['/login'],{
            queryParams:{
              deleteUser:true
            }
          });
        });
  }
  onLogOut(){
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
