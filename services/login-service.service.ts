import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Istudent } from 'src/app/student';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url = "http://slimproject/api/students/login";

  constructor(private http:HttpClient, private router: Router) { }

  
  login(formData): Observable<Istudent>{
    return this.http.post<Istudent>(this.url,formData);
  }
}
