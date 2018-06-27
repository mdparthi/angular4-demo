import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; // to fetch built in library

@Component({
  selector: 'app-obs-demo',
  templateUrl: './obs-demo.component.html',
  styleUrls: ['./obs-demo.component.css']
})
export class ObsDemoComponent implements OnInit {

  num: number;
  data : string;
  myObs : any;

  constructor() {
    Observable.interval(2000)
      .subscribe((num) => this.num = num,
        (err) => console.log(err),
          () => console.log('completed')
        );
    
      // own observable
   this.myObs = Observable.create((observer)=> {
      setTimeout(() => {
        observer.next("First Package")
      }, 1000);

      setTimeout(() => {
        observer.next("eEcond Package")
      }, 2000);

      setTimeout(() => {
        observer.next("Threee Package")
      }, 3000);

      setTimeout(() => {
        observer.next("Four Package")
        observer.complete();
      }, 4000);
    
    }).subscribe(
        data => this.data = data,
        err => console.log(err),
        () => console.log('Completed')
      );    
  }

  unsubscribe(){
    this.myObs.unsubscribe();
  }
  ngOnInit() {
  }

}
