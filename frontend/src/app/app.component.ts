import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {first, map, tap} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import {appLoaded, fetchTarantulasAction} from './store/tarantulas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpClient]
})
export class AppComponent implements OnInit {
  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.dispatch(appLoaded());
    this.store.dispatch(fetchTarantulasAction());
  }
}


