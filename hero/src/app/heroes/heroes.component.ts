import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  
  heroes = HEROES;
  
  constructor() { }
  
  selectedHero!: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  // The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component. 
  // It's a good place to put initialization logic.
  ngOnInit(): void {

  }
  
}
