import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = {
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Jan 12, 1964"),
    income : 50000,
    isWorking : true,
    company : "Microsoft",
    image : 'assets/images/billgates.jpg'
  }

  constructor() { }

  ngOnInit() {
  }

}
