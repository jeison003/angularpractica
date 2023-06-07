import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { Output } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // @Output()
  // public onDelete: EventEmitter <number> = new EventEmitter();

  @Output()
  public onDelete: EventEmitter <string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
  //   {
  //   name: 'Trunk',
  //   power: 10
  // }
];


// onDeleteCharacter(index: number):void {
// console.log(index);
// //el index, es el umero que emitira y recibira el main page component html en $event
// this.onDelete.emit(index);
// // this.characterList.splice(index,1);
// }

deleteCharacter(id: string):void {
  console.log(id);
  //el index, es el umero que emitira y recibira el main page component html en $event
  this.onDelete.emit(id);
  // this.characterList.splice(index,1);
  }


}
