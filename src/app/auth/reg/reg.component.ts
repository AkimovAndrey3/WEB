import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../shared/services/users.service";
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  constructor(private router: Router, private usersService: UsersService) {}

  registration: FormGroup|any;

  ngOnInit() {
    this.registration = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email],this.forbiddenEmails.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }

    onSubmit() {
        const {email, password, name} = this.registration.value;
        const user = new User(email, password, name);

        this.usersService.createUser(user)
            .subscribe(() => {
                this.router.navigate(['/login'], {
                    queryParams: {
                        canLogin: true
                    }
                });
            });
    }

    forbiddenEmails(control: AbstractControl): Promise<any> {
        return new Promise((resolve, reject) => {
            this.usersService.getUsers(control.value)
                .subscribe((user: User) => {
                    if (user) {
                        resolve({forbiddenEmail: true});
                    } else {
                        resolve(null);
                    }
                });
        });
    }
}
