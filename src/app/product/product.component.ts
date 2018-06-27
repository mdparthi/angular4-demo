import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id : number;
  name : string;
  page : number;

  constructor(private route : ActivatedRoute) {
    
    // // params
    // this.id = this.route.snapshot.params['id'];
    // this.name = this.route.snapshot.params['name'];
    // //queryparams
    // this.page = this.route.snapshot.queryParams['page_no'];

    // or

    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.name = params['name'];    
      }
    )

    this.route.queryParams.subscribe(
      queryparam => {
        this.page = queryparam['page_no'];
      }
    )

   }

  ngOnInit() {
  }

}
