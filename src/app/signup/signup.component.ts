import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../user';

declare var $:any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  user: User = new User();

    signup:FormGroup|any;
  
    constructor(private _route:Router,
      private userService:UserService){ }
  
    ngOnInit(): void {
      this.signup = new FormGroup({
        'name': new FormControl(),
        'prenom': new FormControl(),
        'email': new FormControl(),
        'phone': new FormControl(),
        'adress': new FormControl(),
        'password': new FormControl()
      })
    }
    signupdata(){
      console.log(this.user)
      this.userService.signUp(this.user).subscribe();
      this._route.navigate([''])
    }

    sbtn(){
      this._route.navigate(['']);
      $('.form-box').css('display', 'block');
      $('.form-box').css('display', 'none');

    }
  
}
