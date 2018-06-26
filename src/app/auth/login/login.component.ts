import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService,
  private dataService: DataService) { }

  login(loginForm : NgForm) {
    console.log("username : " + loginForm.value.username +
                "\npassword : " + loginForm.value.password);
    this.authService.login(loginForm.value.username, loginForm.value.password)
  }

  getApiData() {
    this.dataService.getHttpClientData();
  }
  ngOnInit() {
  }

}
