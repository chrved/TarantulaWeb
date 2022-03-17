import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { CollectionComponent } from './collection/collection.component';
import { WikiComponent } from './wiki/wiki.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CollectionComponent,
    WikiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
