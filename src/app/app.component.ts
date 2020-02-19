import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private route:Router){}
  token = localStorage.getItem('Token');
  name = localStorage.getItem('Name');
  title = 'National Institute Of Technology, Raipur';

  logout(){
    localStorage.clear();
    this.route.navigate(['/login']);
  }
}
