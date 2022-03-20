import { Component, Input, OnInit } from '@angular/core';
import {TarantulaService} from '../service/tarantula.service';
import {Tarantula} from '../model/tarantula.model';
import { Store } from '@ngrx/store';
import { retrivedTarantulasAction, setActiveTarantulaAction, createTarantulaAction } from '../store/tarantula.action';
import { AppState } from '../store/app.state';
import { selectTarantulas } from '../store/tarantula.selector';
import { Location } from '@angular/common';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  tarantulas$: Tarantula[] = [];

  constructor(private service: TarantulaService, private store: Store<AppState>, private location: Location) {
    this.store.select(selectTarantulas).subscribe(data => this.tarantulas$ = data);
  }

  ngOnInit(): void {
    this.service.getTarantulas().subscribe(ts => {
      this.store.dispatch(retrivedTarantulasAction({tarantulas: Array.from(ts)}));
    });

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
