import { Injectable} from'@angular/core';
import {USER_DATA} from '../data/user-data';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user';


@Injectable()
export class DataService {
  counter = 0;

    getUserData(){
        return USER_DATA;
    }

    getHttpData() {
        //return type is observable
    //    return  this.http.get("assets/user-data.json")
    //     .map(response =><User[]> response.json().userdata)
    //     .subscribe((data)=>console.log(data));

    // or

    return  this.http.get("assets/user-data.json")
        .map(response =><User[]> response.json().userdata);
    }
    constructor(private http : Http) {

    }
}