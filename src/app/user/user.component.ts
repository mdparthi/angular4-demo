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

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('title') title : string;
  @Input('user') user : User;
  @Output('childChanged') childChanged = new EventEmitter<string>();
  

  onKeyup(value:  string){
    this.childChanged.emit(value);
  }

  moreInfo(user : User) {
    alert(`${user.firstName} is working with ${user.company} !!`);
  }
  constructor() { console.log("constructor ")}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChange){console.log('change');}
  ngDoCheck(){console.log('docheck');}
  ngSimpleChanges(){console.log('simple');}
  ngAfterContentInit(){console.log('content init');}
  ngAfterContentChecked(){console.log('content chec');}
  ngAfterViewInit(){console.log('view init');}
  ngAfterViewChecked(){console.log('view check');}
  ngOnDestroy(){console.log('destroy');}

}
