import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent  {


  public name : string = 'Spiderman'
  public edad : number = 10
  
  changeName():void{
    this.name = 'Iroman'
  }

  changeEdad():void{
    this.edad = 20
  }


  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  public getheroDescription():string{
    return `${this.name} - ${this.edad}`
  }
}
