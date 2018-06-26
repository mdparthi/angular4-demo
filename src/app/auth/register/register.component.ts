import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username = new FormControl('', [
  Validators.required,
  Validators.minLength(6)
  ]);
  password = new FormControl('', [
    Validators.required,
    this.isExclamation
  ]);

  registerForm : FormGroup;
    
  constructor(private fb : FormBuilder) { 
   this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    })
  }

  register(){
    console.log(this.registerForm);
  }

  isExclamation(input : FormControl) {
    const hasExclamation = input.value.indexOf('!') >=0;
    return hasExclamation ? null : {'needExclamation' :  true };
  }
  ngOnInit() {
  }

}
