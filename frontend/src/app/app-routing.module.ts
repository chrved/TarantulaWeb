import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CollectionComponent } from './collection/collection.component';
import { WikiComponent } from './wiki/wiki.component';

const routes: Routes = [
  {path : '', component : MainComponent},
  {path : 'collection', component : CollectionComponent},
  {path : 'wiki', component : WikiComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
