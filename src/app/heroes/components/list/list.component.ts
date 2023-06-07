import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroDelete?: string;
  public heroNames: string[] = ['Spiderman', 'Ironman','Hulk', 'She Hulk', 'Thor'];


  revomeLastHero(): void{
    this.heroDelete = this.heroNames.pop();
  }
}
