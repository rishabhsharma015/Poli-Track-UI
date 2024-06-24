import { Component, OnInit, inject } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BoothserviceService } from '../../services/boothservice.service';

@Component({
  selector: 'app-booth-list',
  standalone: true,
  imports: [ListComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './booth-list.component.html',
  styleUrl: './booth-list.component.css'
})
export class BoothListComponent implements OnInit {

  boothListForm!: FormGroup;

  boothlist!: [];
  showErrors: boolean = false;
  constructor(private fb: FormBuilder, private boothservice: BoothserviceService) {}

  ngOnInit(): void {
    this.boothListForm = this.fb.group({
      state: ['', Validators.required],
      vidhanSabha: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.boothListForm.valid) {
      console.log(this.boothListForm.value);
    } else {
      console.error('Form is invalid');
      const errorMsgElement = document.getElementById('errorMsg');
      if (errorMsgElement) {
        errorMsgElement.textContent = 'Please fill out all required fields.';
      }
    }
  }




}
