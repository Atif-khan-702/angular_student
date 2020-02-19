import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route:Router) { }
  name = localStorage.getItem('Name');
  father =localStorage.getItem('father');
  mother =localStorage.getItem('mother');
  adhar =localStorage.getItem('adhar');
  gender =localStorage.getItem('gender');
  dob =localStorage.getItem('dob');
  email =localStorage.getItem('email');
  phone =localStorage.getItem('phone');
  country =localStorage.getItem('country');
  state =localStorage.getItem('state');
  city =localStorage.getItem('city');

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['/login']);
  }

}
