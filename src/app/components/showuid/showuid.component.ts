import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-showuid',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './showuid.component.html',
  styleUrl: './showuid.component.css'
})
export class ShowuidComponent {

  emailToCopy: string = '';
  copyButtonText: string = 'Copy';

  constructor(private authservice: AuthService, private route: Router) { 
  }
  
  ngOnInit(): void {
    this.emailToCopy = this.authservice.getRegisteredEmail()
  }


  onRedirect(){
    this.authservice.setRegisteredEmail("");
    this.route.navigate(['/login']);
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.emailToCopy).then(() => {
      this.copyButtonText = 'Copied';
      setTimeout(() => {
        this.copyButtonText = 'Copy';
      }, 2000);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }
}
