import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PasswordValidator } from '../shared/password.validator';
import { SignupService } from 'services/signup.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  get fname(){
    return this.signupForm.get('fname');
  }
  get lname(){
    return this.signupForm.get('lname');
  }
  get user_name(){
    return this.signupForm.get('user_name');
  }
  get password(){
    return this.signupForm.get('password');
  }
  get cnf_pass(){
    return this.signupForm.get('cnf_pass');
  }
  get email(){
    return this.signupForm.get('email');
  }
  get phone(){
    return this.signupForm.get('phone');
  }

  constructor(private fb : FormBuilder, private http: HttpClient, private _signupservice: SignupService, private route: ActivatedRoute) { }

  public infoMessage = '';
  ngOnInit() {
    let msg= this.route.snapshot.paramMap.get('message');
      if(msg!=='') {
          this.infoMessage = msg;
      }
  }

  
  signupForm = this.fb.group({
    fname:['', [Validators.required, Validators.minLength(3)]],
    lname:['',[Validators.required, Validators.minLength(3)]],
    user_name:['',[Validators.required, Validators.minLength(3)]],
    password:['',[Validators.required, Validators.minLength(3)]],
    cnf_pass:['',[Validators.required, Validators.minLength(3)]],
    email:['',[Validators.required, Validators.email]],
    phone:['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
  }, {validators: PasswordValidator});

  onSubmit(){
    this._signupservice.register(this.signupForm.value);
  }


}
