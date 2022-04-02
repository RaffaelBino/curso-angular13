import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Bianca';
  userAge = 23
  userData = {
    email: 'bianca@email.com',
    role: 'Admin',
  }

  title = 'curso-angular13';
}
