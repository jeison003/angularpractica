import { Component} from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: './main-page.component.html'
})

export class MainPagesComponent {

  //inyeccion de dependencia del servicio de dbz
  constructor( private DbzService: DbzService){

  }
  get characters(): Character[]{
    // los [...data] hace referencia a que crea una copia de los character, asi si se modifican no afectana los originales
    return [...this.DbzService.characters];
  }

  onDeleteCharacter(id: string): void{
    this.DbzService.deleteCharacter(id);
  }

  onNewCharacter(character: Character){
    this.DbzService.addCharacter(character);
  }

}
