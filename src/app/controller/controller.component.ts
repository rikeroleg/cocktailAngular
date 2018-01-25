import { Component, OnInit } from '@angular/core';
import {DrinksService} from '../drinks.service';


@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  name = 'Name: ';
  type = 'Type: ';
  category = 'Category: ';
  glass = 'Glass: ';
  instructions = 'Instructions: ';
  ingredients = 'Ingredients: ';
  measures = 'Measures: ';
  cocktail: any;

  constructor(private drinkService: DrinksService) { }
  ngOnInit() {
  }

  getDrink() {
    this.drinkService.getDrink().subscribe(beverage => {
      this.cocktail = beverage;
     // console.log(this.cocktail);
    });
  }

}
