import { Component, OnInit, Input ,
OnChanges,
DoCheck,
SimpleChanges,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy,
SimpleChange,
Output,
EventEmitter} from '@angular/core';
import {User} from '../model/user';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers : [DataService] // injected for specific instantiation
})
export class UserComponent implements OnInit {
  // @Input('title') title : string;
  // @Input('users') users : User[];

  users : User[];

  @Output('childChanged') childChanged = new EventEmitter<string>();
  id : number = 2;

  myClasses = {
    'feature' : true,
    'transform': false
  }
  myColor = 'yellow';
  
  
  onKeyup(value:  string){
    this.childChanged.emit(value);
  }

  moreInfo(user : User) {
    alert(`${user.firstName} is working with ${user.company} !!`);
    this.myClasses.transform = true;
  }

  increase(){
    this.dataService.counter++;
 }

  constructor(public dataService : DataService) { 
    // console.log("constructor ");
  }

  ngOnInit() {
    this.dataService.getHttpClientData()
    .subscribe(data => this.users = data);
  }

  // ngOnChanges(changes: SimpleChange){console.log('change');}
  // ngDoCheck(){console.log('docheck');}
  // ngSimpleChanges(){console.log('simple');}
  // ngAfterContentInit(){console.log('content init');}
  // ngAfterContentChecked(){console.log('content chec');}
  // ngAfterViewInit(){console.log('view init');}
  // ngAfterViewChecked(){console.log('view check');}
  // ngOnDestroy(){console.log('destroy');}

}
