import { Component } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{

   constructor(private router: Router) { }

   onButtonClicked(where: string): void{
    if(where === "wiki"){
      this.router.navigateByUrl('/wiki')
    } else if (where === "collection"){
      this.router.navigateByUrl('/collection')
    }

   }

}
