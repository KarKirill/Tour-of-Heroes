import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 12, name: 'Доктор айубит', ability: 'Лечит наповал' },
      { id: 13, name: 'Бомбануло', ability: 'Взрывается от комментов' },
      { id: 14, name: 'Рукожоп', ability: 'Всё, за что берется, превращается в говно' },
      { id: 15, name: 'Прилипенко', ability: 'Липнет ко всем окружающим' },
      { id: 16, name: 'Стёрка', ability: 'Стирает лучшее в людях' },
      { id: 17, name: 'Динамик', ability: 'Громко орёт по любому поводу' },
      { id: 18, name: 'Док НеПью', ability: 'Алкоголь не пьёт, а заправляется' },
      { id: 19, name: 'Зажигалка', ability: 'Героиня тусовок' },
      { id: 20, name: 'Шептун', ability: 'Портит воздух и настроение' }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}