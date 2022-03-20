import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarantula } from '../../model/tarantula.model';
import { Store } from '@ngrx/store';

import { selectTarantulaById } from 'src/app/store/tarantula.selector';
import { setActiveTarantulaAction } from 'src/app/store/tarantula.action';

@Component({
  selector: 'tarantula-item',
  templateUrl: './tarantula.component.html',
  styleUrls: ['./tarantula.component.css']
})

export class TarantulaComponent implements OnInit {
  tarantula: Tarantula = {
    id: '',
    name: '',
    dob: '',
    acquired: '',
    sex: ''
  };

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') || "";
    this.store.select(selectTarantulaById(id)).subscribe(t => {
      if(t){
        this.tarantula = t
        this.store.dispatch(setActiveTarantulaAction({tarantula: this.tarantula }))
      }
    });
  }
}
