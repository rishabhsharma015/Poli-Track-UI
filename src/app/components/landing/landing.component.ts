import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserDropdownComponent } from '../user-dropdown/user-dropdown.component';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, UserDropdownComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{

  
  imgs = ["../../../assets/voting1.png", "../../../assets/voting2.png", "../../../assets/voting3.png", "../../../assets/voting4.png"];
  currentIndex: number = 0;
  img: string = this.imgs[this.currentIndex];;
  


  ngOnInit(): void {
    

    // setInterval(() => {
    //   this.currentIndex = (this.currentIndex + 1) % this.imgs.length;
    //   this.img = this.imgs[this.currentIndex];
    // }, 2300);
  }

  
}
