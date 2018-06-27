import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
contact_no : number = 9789166116;
filteredStatus = "";

  futureData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here comes the data...")
    }, 2000);
  });

  todos = [ {
    label : "some work",
    status : "done"
  },
  {
    label : "2 work",
    status : "pending"
  },
  {
    label : "3 work",
    status : "done"
  },
  {
    label : "4 work",
    status : "pending"
  }
]
  

addTodo() {
  this.todos.push({
    'label' : "new work",
    'status' : "pending"
  })
}

  constructor() { }

  ngOnInit() {
  }

}
