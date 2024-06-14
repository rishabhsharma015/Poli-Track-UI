import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-showuid',
  standalone: true,
  imports: [],
  templateUrl: './showuid.component.html',
  styleUrl: './showuid.component.css'
})
export class ShowuidComponent {

  idToCopy: string = '';
  copyButtonText: string = 'Copy';

  constructor(private authservice: AuthService) { 
  }
  
  ngOnInit(): void {
    this.idToCopy = this.authservice.getRegisteredId()
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.idToCopy).then(() => {
      this.copyButtonText = 'Copied';
      setTimeout(() => {
        this.copyButtonText = 'Copy';
      }, 2000);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }
}
