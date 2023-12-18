import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {User} from "../../models/user.model";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  user: User|any;
  userIsAdmin = false;
  constructor(private authService:AuthService,
              private router:Router) {}
  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user')!)
    this.isAdmin();
  }
  onLogOut(){
    this.authService.logOut();
    this.router.navigate(['/login'])
  }
  isAdmin(){
    if(this.user.id == 1)
      this.userIsAdmin = true;
  }
}
