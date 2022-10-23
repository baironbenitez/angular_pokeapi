import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: DetailPokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailPokemonRoutingModule { }
