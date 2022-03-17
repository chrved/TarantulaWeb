import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {first, map, tap} from 'rxjs/operators';
@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
   title = 'frontend';
   message = '';

   constructor(private http: HttpClient) { }

   ngOnInit(): void {
     this.http.get('http://localhost:8080/api/tarantulas').pipe(
       first(),
       tap(result => console.log('Message received from the server: ', result)),
       map(result => this.message = JSON.stringify(result))
     ).subscribe();
   }

}
