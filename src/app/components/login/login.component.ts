import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AdminauthService } from '../../services/adminauth.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

    loginForm!: FormGroup;
    constructor(public fb: FormBuilder, private route: Router, private authservice: AuthService, private adminauthservice: AdminauthService){}

    ngOnInit(): void {
      this.loginForm = this.fb.group({
        uid: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        rememberMe: [false, Validators.required]
      })

      this.populateFormFromLocalStorage()
    }

    populateFormFromLocalStorage(): void {
      const uid = localStorage.getItem('uid');
      const password = localStorage.getItem('password');
  
      if (uid && password) {
        this.loginForm.controls['uid'].setValue(uid);
        this.loginForm.controls['password'].setValue(password);
        this.loginForm.controls['rememberMe'].setValue(true);
      }
    }

    onLogin(){
      // If admin.
      if(this.loginForm.value.uid === 'ADMIN' && this.loginForm.value.password === 'admin123'){
        console.log('admin login');
        this.adminauthservice.login();
        return;
      }

      // if user.
      this.authservice.login(this.loginForm.value);
      let userlogin = {...this.loginForm.value}
      delete userlogin['rememberMe'];
    
      // Saving credentials if true.
      if(this.loginForm.value.rememberMe){
        localStorage.setItem('uid', this.loginForm.value.uid);
        localStorage.setItem('password',  this.loginForm.value.password);
      }

      this.authservice.login(userlogin).subscribe((data)=>{
        console.log(data);
        this.authservice.setLoginStatus(true);
        this.authservice.setLoggedInUserName(data.firstName + ' ' + data.lastName);
        this.route.navigate(['/boothList']);
        
      }, (err)=> console.log("Invalid credentials",err))
      this.route.navigate(['/boothList']);
      this.loginForm.reset();
    }
}
