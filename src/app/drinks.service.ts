import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';


@Injectable() 
export class DrinksService {

  constructor(private http: Http) { }

  getDrink(): Observable<any> {
    return this.http.get('http://localhost:8080/all').map(res => res.json());
  }
}
