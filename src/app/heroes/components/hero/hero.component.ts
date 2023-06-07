import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
public name: string = 'iroman';
public age: number = 20;

get capitalizedName(): string{

  return  this.name = this.name.toUpperCase();;
}

getHeroeDescription(): string{
  return `${this.name} - ${this.age}`;
}

changeHero(): void{
 this.name = 'spiderman'.toUpperCase();
}

changeAge(): void{
   this.age = 30;
}

resetForm(): void{
  this.name = 'iroman';
  this.age = 20;
}

}
