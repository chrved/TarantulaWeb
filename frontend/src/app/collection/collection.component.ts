import { Component, Input, OnInit } from '@angular/core';
import {TarantulaService} from '../service/tarantula.service';
import {Tarantula} from '../model/tarantula.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
//import { selectIsTarantulasLoaded, selectTarantulas } from '../store/tarantula.selector';
import { Location } from '@angular/common';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  tarantulas$: Tarantula[] = [];

  constructor(
    private service: TarantulaService,
    private store: Store,
    private location: Location) {

      //this.store.select(selectTarantulas).subscribe(data => this.tarantulas$ = data);
  }

  ngOnInit(): void {
    /*
    console.log(this.store.select(selectIsTarantulasLoaded))
    this.service.getTarantulas().subscribe(ts => {
      this.store.dispatch(retrivedTarantulasAction({tarantulas: Array.from(ts)}));
    });
    */
  }
/*
  onClicked(t:Tarantula){
    console.log("Clicked: ",t)
    this.store.dispatch(setActiveTarantulaAction({tarantula: t }))
    this.location.replaceState("/collection/"+t.id)
    //this.store.dispatch(createTarantulaAction({tarantula: t }))
  }
  */
}
