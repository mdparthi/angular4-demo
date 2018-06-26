import { Component } from '@angular/core';
// import { USER_DATA } from './data/user-data';
import {User} from './model/user';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users : User[];

  constructor(public dataService : DataService) {
  }

  ngOnInit(){
    // this.users = USER_DATA;
    // this.users = this.dataService.getUserData();
    this.dataService.getHttpData()
    .subscribe(data => this.users = data)
  }
 
  changeChild(eventdata : any){
    this.title = eventdata;
  }
  
  increase(){
    this.dataService.counter++;
  }

}
