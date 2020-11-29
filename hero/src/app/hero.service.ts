import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// A provider is something that can create or deliver a service; in this case, 
// it instantiates the HeroService class to provide the service.
@Injectable({
  providedIn: 'root'
})

export class HeroService {

  
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }


}
