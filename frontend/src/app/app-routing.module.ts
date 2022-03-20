import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CollectionComponent } from './collection/collection.component';
import { TarantulaComponent } from './collection/tarantula/tarantula.component';
import { WikiComponent } from './wiki/wiki.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {path : 'main', component : MainComponent},
  {path : 'collection/:id', component : TarantulaComponent},
  {path : 'collection', component : CollectionComponent},
  {path : 'wiki', component : WikiComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
