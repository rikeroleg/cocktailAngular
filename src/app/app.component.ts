import { Component } from '@angular/core';
import {DrinksService} from './drinks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oleg\'s Recipe of the day';
  //image = 'http://www.thecocktaildb.com/images/media/drink/xrvxpp1441249280.jpg';
}
