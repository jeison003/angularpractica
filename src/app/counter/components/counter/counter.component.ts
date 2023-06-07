import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template:`
  <h1>Componente counter</h1>
  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="ressetCounter()">Resset</button>
  <button  (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent{

  public counter: number = 10;

  increaseBy(numero: number): void{
    this.counter += numero;
  }

  ressetCounter(): void{
    this.counter = 10;
  }
}
