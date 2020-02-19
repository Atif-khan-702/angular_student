import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginServiceService } from 'services/login-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Istudent } from '../student';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  student: Istudent;

  constructor(private fb: FormBuilder, private _loginservice: LoginServiceService,private router: Router, private route: ActivatedRoute) { }

  get user_name(){
    return this.loginForm.get('user_name');
  }
  get password(){
    return this.loginForm.get('password');
  }

  public infoMessage = '';
  ngOnInit() {
    let msg1= this.route.snapshot.paramMap.get('message1');
      if(msg1 !== undefined &&  msg1 === 'true') {
          this.infoMessage = 'Registration Successful! Please Login!';
      }
  }

  loginForm = this.fb.group({
    user_name:['',[Validators.required, Validators.minLength(3)]],
    password:['',[Validators.required, Validators.minLength(3)]]
  });

  onSubmit(){
    this._loginservice.login(this.loginForm.value)
    .subscribe(student => this.student = student);
    localStorage.setItem('Token',this.student.Token);
    localStorage.setItem('Name',this.student.First_Name +" "+ this.student.Last_Name);
    localStorage.setItem('father', this.student.Father_Name);
    localStorage.setItem('mother',this.student.Mother_Name);
    localStorage.setItem('email', this.student.Email);
    localStorage.setItem('phone', this.student.Phone);
    localStorage.setItem('adhar',this.student.Adhar);
    localStorage.setItem('gender', this.student.Gender);
    localStorage.setItem('dob', this.student.DOB);
    localStorage.setItem('country', this.student.Country);
    localStorage.setItem('state', this.student.State);
    localStorage.setItem('city', this.student.City);
    this.router.navigate(['/profile']);

  }
}
