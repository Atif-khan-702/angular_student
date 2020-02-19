import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url = "http://slimproject/api/students/signup";

  constructor(private http:HttpClient, private router: Router) { }

  
  register(formData){
    this.http.post<any>(this.url,formData).subscribe(
      (result: any) =>{
        if(result.status !== '201')
          this.router.navigate(['/signup', result.message]);
        else
          this.router.navigate(['/login', 'true']);
      }
    )
  }
}
