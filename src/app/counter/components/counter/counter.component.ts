
import {Component} from '@angular/core'



@Component({
    selector:'app-counter',
    template:`
    
    <p>Counter: {{counter}} </p>

    <button (click)="increaseBy(+1)">sumar</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">restar</button>



    
    `
})
export class CounterComponent{
    public title:string = 'Mi primera App en anngular';
  public counter:number = 0;

  increaseBy(value:number):void{
    this.counter += value; 
  }

  resetCounter():void{
    this.counter = 0;
  }




}