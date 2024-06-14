import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import AOS from 'aos'
import { AdminauthService } from '../../services/adminauth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  public authservice = inject(AuthService);
  public adminauthservice = inject(AdminauthService);
  public activatedRoute = inject(Router);
  public router = inject(Router);

  showMenu: boolean = true;

  ngOnInit(): void {
    AOS.init();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Close the menu on route change
        this.showMenu = true;
      }
    });
  }

  

  onClickOpen(): void {
    this.showMenu = !this.showMenu;
    // gsap.to(".box", { duration: 0.5, opacity: this.showMenu? 1 : 0 });
    this.activatedRoute.url
  }


  logout(){
    if(this.adminauthservice.getLoginStatus()){
      this.adminauthservice.logout();
    }
    else{
      this.authservice.logout();
    }
  }

}
