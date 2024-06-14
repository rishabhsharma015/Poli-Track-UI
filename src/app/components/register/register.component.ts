import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authservice: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],  // Change firstname to firstName
      lastName: ['', Validators.required],    // Change lastname to lastName
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      gender: ['', Validators.required],
      streetAddress: ['', Validators.required],
      streetAddress2: [''],
      city: ['', Validators.required],
      region: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      parties: ['', Validators.required],
      position: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
    
  }

  passwordMatchValidator(form: FormGroup) {
    return form.controls['password'].value === form.controls['confirmPassword'].value
      ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      let user = {uid: "", ...this.registerForm.value}
      delete user['confirmPassword']
      console.log(user)
      console.log('User payload:', user);
      this.authservice.register(user).subscribe(
        (data) => {
          console.log(data.uid);
          this.authservice.setRegisteredId(data.uid);
          this.route.navigate(['/success']);
        },
        (error) => {
          console.error("Could not register user", error);
        }
      );
    } else {
      console.log('Form is not valid');
      this.findInvalidControls();
    }
    this.onReset()
  }


  onReset(){
    this.registerForm.reset();
  }

  findInvalidControls() {
    const invalid = [];
    const controls = this.registerForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
        console.log(`${name} is invalid:`, controls[name].errors);
      }
    }
    return invalid;
  }
}
