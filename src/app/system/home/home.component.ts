import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersService} from "../../shared/services/users.service";
import {User} from "../../shared/models/user.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  user:User|any;

  imagePath: string;
  imagePathv2: string;
  imageCollag: string;

  favoriteBook:string = '';
  readingTime:string = '';
  constructor(private userService: UsersService) {
    this.imagePath = 'assets/images/StephenKing.jpg';
    this.imagePathv2 = 'assets/images/StephenKingArt.jpg';
    this.imageCollag = 'assets/images/PetSematary.jpg';
  }
  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user')!)
  }
  submitForm(f:NgForm) {
    const {favoriteBook, readingTime} = f.value;

    this.userService.updateUser(this.user.id, {
      email: this.user.email,
      password: this.user.password,
      name: this.user.name,
      favoriteBook: favoriteBook,
      readingTime: readingTime
    }).subscribe(response => {
      console.log('Данные успешно обновлены', response);
      f.reset();
      this.userService.getUsers(this.user.email).subscribe((user:User)=>{
        localStorage.clear();
        console.log("LocalStorage очищен");
        this.saveUser(user);
        console.log("LocalStorage обновлен");
      })
    });
  }
  saveUser(user:User){
    localStorage.setItem('user', JSON.stringify(user));
  }
}
