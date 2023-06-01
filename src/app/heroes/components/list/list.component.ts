import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  constructor() { }

  public heroName:string[]=['spiderman','Batman','Hulk','she hulk','thor'];
  public deleteHero?:string;
  
  
  removeLatsHero():void{

    this.deleteHero = this.heroName.pop();
 
    
  }

  

}
