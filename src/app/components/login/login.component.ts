import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AdminauthService } from '../../services/adminauth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

    loginForm!: FormGroup;
    passwordFieldType: string = 'password';
    constructor(private snackBar: MatSnackBar, public fb: FormBuilder, private route: Router, private authservice: AuthService, private adminauthservice: AdminauthService){}


    ngOnInit(): void {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        rememberMe: [false, Validators.required]
      })

      this.populateFormFromLocalStorage()
    }

    populateFormFromLocalStorage(): void {
      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');
  
      if (email && password) {
        this.loginForm.controls['email'].setValue(email);
        this.loginForm.controls['password'].setValue(password);
        this.loginForm.controls['rememberMe'].setValue(true);
      }
    }

    togglePasswordVisibility(): void {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    }

    onLogin(){
      // If admin.
      if(this.loginForm.value.email === 'ADMIN@gmail.com' && this.loginForm.value.password === 'admin123'){
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
        localStorage.setItem('email', this.loginForm.value.email);
        localStorage.setItem('password',  this.loginForm.value.password);
      }

      this.authservice.login(userlogin).subscribe((data)=>{
        console.log(data);
        this.authservice.setLoginStatus(true);
        this.authservice.setLoggedInUserName(data.firstName + ' ' + data.lastName);
        this.route.navigate(['/boothList']);
        
      }, (err)=> {
        this.snackBar.open('Invalid email or password', 'Close', {
          duration: 3000,
          verticalPosition: 'top', 
          horizontalPosition: 'center'
        });
      })

      this.loginForm.reset();
    }
}
