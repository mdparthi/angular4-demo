import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService,
  private dataService: DataService,
  private router: Router) { }

  login(loginForm : NgForm) {
    console.log("username : " + loginForm.value.username +
                "\npassword : " + loginForm.value.password);
    this.authService.login(loginForm.value.username,
       loginForm.value.password).then((response) => {
         this.router.navigate(['/pipe'], {queryParams : {page_no : 503}});
       });

  }

  getApiData() {
    this.dataService.getHttpClientData();
  }

  goto() {
    this.router.navigate(['/pipe']);
  }
  ngOnInit() {
  }

}
