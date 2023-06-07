import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {



  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7000
  }
];

addCharacter(character: Character):void{
  // los "..." es el operador spred, hace que toma todas las propiedaddes y la esparza en el nuevo objeto creado
  const newCharacter: Character={id: uuid(), ...character}
  this.characters.push(newCharacter);
}

// onDeleteCharacter(index: number){
//   this.characters.splice(index,1);
// }

deleteCharacter(id: string){
  this.characters = this.characters.filter(character => character.id !== id);
}

}
