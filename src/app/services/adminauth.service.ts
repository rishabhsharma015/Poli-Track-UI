import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  private loggeIn: boolean = false;
  private loggedInAdminName: string = '';
  constructor(private router: Router) { }


  login(){
    this.setLoginStatus(true);
    this.setLoggedInAdminName('ADMIN');
    this.router.navigate(['/dashboard']);
  }


  logout(){
    this.setLoggedInAdminName('');
    this.setLoginStatus(false);
    this.router.navigate(['/login'])
  }


  // Is logged in
  getLoginStatus(): boolean {
    return this.loggeIn;
  }

  // Set logged in status
  setLoginStatus(status: boolean): void {
    this.loggeIn = status;
  }

  // get logged in admin name
  getLoggedInAdminName(): string {
    return this.loggedInAdminName;
  }

  // set logged in admin name
  setLoggedInAdminName(adminName: string): void {
    this.loggedInAdminName = adminName;
  }
}

