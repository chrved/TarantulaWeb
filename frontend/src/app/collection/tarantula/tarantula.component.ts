import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarantula } from '../../model/tarantula.model';
import { Store } from '@ngrx/store';
/*
import { selectIsTarantulasLoaded, selectTarantulaById } from 'src/app/store/tarantula.selector';
import { retrivedTarantulasAction, setActiveTarantulaAction, updateTarantulaAction } from 'src/app/store/tarantula.action';
import { TarantulaService } from 'src/app/service/tarantula.service';
import { Observable } from 'rxjs';
*/
@Component({
  selector: 'tarantula-item',
  templateUrl: './tarantula.component.html',
  styleUrls: ['./tarantula.component.css']
})

export class TarantulaComponent implements OnInit {
  tarantula:any// Observable<Tarantula | undefined> = new Observable
  /*
   Tarantula = {
    id: '',
    name: '',
    dob: '',
    acquired: '',
    sex: ''
  };
*/
  constructor(
    private route: ActivatedRoute,
    private store: Store,

  ) {
//     this.store.select(selectIsTarantulasLoaded).subscribe(isLoaded => {
//       if(!isLoaded) {
//         this.service.getTarantulas().subscribe(ts => {
//           this.store.dispatch(retrivedTarantulasAction({tarantulas: Array.from(ts)}));
//         });
//       }
//     })
  }

  onClick(){
//     let newObj = {...this.tarantula}
//     newObj.name = '999'
//     this.store.dispatch(updateTarantulaAction({tarantula:newObj}))
  }
  ngOnInit(): void {
//     this.setActive(this.route.snapshot.paramMap.get('id') || "");
  }

  setActive(id: string): void{
//     this.tarantula = this.store.select(selectTarantulaById(id))
//     .subscribe(t => {
//       if(t){
//         debugger
//         this.tarantula = t
//         this.store.dispatch(setActiveTarantulaAction({tarantula: this.tarantula }))
//       }
//     });
  }
}
