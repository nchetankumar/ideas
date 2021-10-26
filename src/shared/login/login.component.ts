import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  employeeId = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.employeeId.hasError('required')) {
      return 'You must enter a value';
    }

    return this.employeeId.hasError('employeeId') ? 'Please enter Employee Id' : '';
  }
  constructor(private router: Router) { }
  getUserData() {
    if (this.employeeId.value) {
      this.router.navigateByUrl('/dashboard');
    } else {
      this.getErrorMessage();
    }
  }
  ngOnInit(): void {
  }

}
