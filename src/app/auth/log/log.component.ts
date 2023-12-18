import {NgModule} from "@angular/core";
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/models/user.model";
import {UsersService} from "../../shared/services/users.service";
import {Message} from "../../shared/models/message.model";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
    constructor(private router: Router,
                private usersService: UsersService,
                private authService: AuthService,
                private route: ActivatedRoute) {}
    public logged!: FormGroup;
    public message!: Message;

    ngOnInit() {
        this.message = new Message('danger', '');
        this.route.queryParams.subscribe((params: Params) => {
            if(params['canLogin']) {
                this.showMessage({
                    text: 'Теперь вы можете зайти в систему',
                    type: 'succes'
                });
            }
            if(params['deleteUser']) {
                this.showMessage({
                    text: 'Ваш аккаунт успешно удален',
                    type: 'succes'
                });
            }
        });
        this.logged! = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
        });
    };

    onSubmit() {
        const formData = this.logged!.value;
        this.usersService.getUsers(formData.email)
            .subscribe((user: User) => {
                if (user) {
                    if (user.password === formData.password)
                    {
                        window.localStorage.setItem('user', JSON.stringify(user));
                        this.authService.logIn();
                        this.router.navigate(['/system', 'home']);
                        console.log('Все данные введены правильно');
                    } else {
                        this.showMessage({
                            text: 'Пароль не верный',
                            type: 'danger'
                        });
                    }
                } else {
                    this.showMessage({
                        text: 'Такого пользователя не существует',
                        type: 'danger'
                    });
                }
            });
        console.log(this.logged!);
    };
    goToReg() {
        this.router.navigate(['/reg']);
    };
    private showMessage(message:Message){
        this.message = message;
        window.setTimeout(()=>{
            this.message.text ='';
        }, 5000);
    }
}

