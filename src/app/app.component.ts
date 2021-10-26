import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hack-ideas';
  constructor(public router: Router) {}
  logout() {
    sessionStorage.removeItem('taskData');
    this.router.navigateByUrl('/login');
  }
}
