import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User, UserLogin } from '../models/User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  private apiUrl = 'http://localhost:8080/api/users';
  private loggedInUserName:string = ''
  private loggedInId: string = '';
  private registeredId: string = '';
  private loggedIn: boolean = false;


  constructor(private http: HttpClient, private route: Router) { }
  ngOnInit(): void {}

  // Login
  login(credentials: UserLogin): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Register
  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // Logout
  logout(){
    this.setLoggedInUserName('');
    this.setLoginStatus(false);
    this.route.navigate(['/login'])
  }

  // Is logged in
  getLoginStatus(){
    return this.loggedIn;
  }

  setLoginStatus(status: boolean){
    this.loggedIn = status;
  }

  // Get logged in username
  getLoggedInUserName(){
    return this.loggedInUserName;
  }

  // set Logged In UserName
  setLoggedInUserName(username: string){
    this.loggedInUserName = username;
  }

  // get registered id
  getRegisteredId(){
    return this.registeredId;
  }

  // set Registered Id
  setRegisteredId(id: string){
    this.registeredId = id;
  }

}


