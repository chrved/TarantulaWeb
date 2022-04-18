import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { CollectionComponent } from './collection/collection.component';
import { WikiComponent } from './wiki/wiki.component';
import { TarantulaComponent } from './collection/tarantula/tarantula.component';
import { environment } from '../environments/environment'; // Angular CLI environment
import { StoreModule } from '@ngrx/store';
import { tarantulasReducer } from './store/tarantulas/tarantula.reducer';
import {EffectsFeatureModule, EffectsModule} from "@ngrx/effects";
import {TarantulaEffects} from "./store/tarantulas/tarantula.effect";
//import { tarantulasReducer } from './store/tarantula/tarantula.reducer';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CollectionComponent,
    WikiComponent,
    TarantulaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ tarantulaState: tarantulasReducer}),
    EffectsModule.forRoot([TarantulaEffects]),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
