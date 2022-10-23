import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons.component';

const routes: Routes = [
  {
    path:'',
    component:PokemonsComponent
  },
  {
    path:':id',
    loadChildren:()=>import('./detail-pokemon/detail-pokemon.module').then(m=>m.DetailPokemonModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
